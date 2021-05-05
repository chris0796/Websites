var anketaController = {};

(function($) {

	anketaController = {

		init: function (data) {
			var self = this;

			self.anketa_id = data.anketa_id;
			self.groups    = data.groups;
			self.form      = data.form_selector;
			self.field     = data.field_selector;
			self.row_box   = data.row_box_selector;
			self.row       = data.row_selector;

			/* Ð”ÑƒÐ±Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹ */
			$(self.form).find('[id*="anketa_group_dublicate"]').on('click', function(){
				var group_id = parseInt($(this).attr('id').replace('anketa_group_dublicate_','')),
					dublicate_params = self.groups[group_id].dublicate_params;

				self.dublicateGroup($(this), group_id, dublicate_params);
			});

			/* Ð£Ð´Ð°Ð»ÐµÐ½Ð¸Ðµ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹ Ð´ÑƒÐ±Ð»ÐµÐ¹ */
			$(self.form).find('[id*="anketa_group_remove"]').on('click', function(){
				var group_id = parseInt($(this).attr('id').replace('anketa_group_remove_','')),
					dublicate_params = self.groups[group_id].dublicate_params,
					copy_index = parseInt($(this).attr('data-copy-index'));

				self.removeGroupDublicate(group_id, dublicate_params, copy_index);
			});

			/* Ð¡Ð¾Ð±Ð¸Ñ€Ð°ÐµÑ‚ÑÑ ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ñ„Ð¾Ñ€Ð¼Ñ‹ Ð¿ÐµÑ€ÐµÐ´ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÐºÐ¾Ð¹ */
			$(self.form).on('submit', function(){
				self.getAnketaStructure();
			});

			/* Ð˜Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ masked input */
			$.mask.definitions['*'] = "[0-9]";
			
			$('#form_'+self.anketa_id).find('input[type="text"][data-mask]').each(function(){
				$(this).mask($(this).attr('data-mask'));
			});

			var control_value,
				control_value_width;

			$(self.form).find(self.field).each(function(){
				if ($(this).attr('data-field-type') == 10) {
					self.calendarInit($(this), false);
				} else if ($(this).attr('data-field-type') == 11) {
					self.calendarInit($(this), true);
				};

				control_value = $(this).find('.control-value');

				if (control_value.attr('data-field-width')) {
					control_value.width(control_value.attr('data-field-width'));
				};
			});

			/* ÐžÑ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð³Ñ€ÑƒÐ¿Ð¿ Ð¿Ð¾ ÑƒÑÐ»Ð¾Ð²Ð¸ÑŽ */
			self.groupsAttachInit();

			$(self.form).ChangeControls();

			$(self.form).find('.control-text.error:not(".calendar-label"), .control-textarea.error').on('focus', function(){
				self.toggleFieldError($(this), 'show');
			}).on('blur', function(){
				self.toggleFieldError($(this), 'hide');
			});
		},

		groupsAttachInit: function(){
			var self = this;

			$(self.form).find('.anketa-group-toggler').each(function(){
				$(this).off('change').on('change', function(e){
					var field_id  = parseInt($(this).parents(self.field).attr('data-field-id')),
						group_ids = $(this).attr('data-call-groups');

					self.toggleGroup(group_ids, $(this), field_id);
				});
			});
		},

		calendarInit: function(calendar_field, is_interval){
			var self = this,
				init_from,
				init_to,
				init_total;

			if (!calendar_field) {
				return false;
			};

			if (is_interval == true) {
				calendar_field.find('.ui-datepicker-trigger').remove();

				init_from  = calendar_field.find('.init-calendar-from').removeClass('hasDatepicker');
				init_to    = calendar_field.find('.init-calendar-to').removeClass('hasDatepicker');
				init_total = calendar_field.find('.init-calendar-interval');

				function setTotalValue () {
					if (init_from.val() != '' && init_to.val() != '') {
						init_total.val(init_from.attr('data-label') + ' ' + init_from.val() + ' ' + init_to.attr('data-label') + ' ' + init_to.val());
					};
				};

				init_from.datepicker({
					changeMonth: true,
					numberOfMonths: 1,
					showOn: 'button',
					beforeShow: function() {
						if ($(this).hasClass('error')) {
							anketaController.toggleFieldError($(this), 'show');							
						};
					},
					onClose: function( selectedDate ) {
						init_to.datepicker( 'option', 'minDate', selectedDate );
						setTotalValue();

						if ($(this).hasClass('error')) {
							anketaController.toggleFieldError($(this), 'hide');							
						};
					}
				});
				init_to.datepicker({
					changeMonth: true,
					numberOfMonths: 1,
					showOn: 'button',
					beforeShow: function() {
						if ($(this).hasClass('error')) {
							anketaController.toggleFieldError($(this), 'show');							
						};
					},
					onClose: function( selectedDate ) {
						init_from.datepicker( 'option', 'maxDate', selectedDate );
						setTotalValue();

						if ($(this).hasClass('error')) {
							anketaController.toggleFieldError($(this), 'hide');							
						};
					}
				});

			} else {
				calendar_field.find('.ui-datepicker-trigger').remove();
				calendar_field.find('.init-calendar').removeClass('hasDatepicker').datepicker({
					showOn: 'button',
					beforeShow: function(input) {
						if ($(this).hasClass('error')) {
							anketaController.toggleFieldError($(this), 'show');							
						};
					},
					onClose: function(input) {
						if ($(this).hasClass('error')) {
							anketaController.toggleFieldError($(this), 'hide');							
						};
					}
				});
			};
		},

		dublicateGroup: function(button, group_id, params){
			if (!button || !group_id || !params) {
				return false;
			};

			var self                      = this,
				orirgin_row               = $(button).parents('.sub-row'),
				group_origin_fields       = $(self.form).find(self.field+'[data-group-id="'+group_id+'"]').not('.double'),
				group_origin_fields_count = $(group_origin_fields).size(),
				group_all_fields          = $(self.form).find(self.field+'[data-group-id="'+group_id+'"]'),
				group_all_fields_count    = $(group_all_fields).size(),
				copy_index                = parseInt(group_all_fields_count/group_origin_fields_count) - 1,
				last_rows                 = [],
				prev_rows                 = [],
				dublicate_data            = params,
				copy_group_index          = 1,
				field_id,
				parent_row,
				field_clone,
				dublicate_button,
				dublicate_position,
				dublicate_name,
				dublicate_id;

			if (copy_index == 0) {
				group_fields = $(self.form).find(self.field+'[data-group-id="'+group_id+'"]').not('.double');
			} else {
				group_fields = $(self.form).find('.sub-row[data-copy-index="'+copy_index+'"]').removeClass('row-double').find(self.field+'[data-group-id="'+group_id+'"]');
			};

			copy_index++;

			if (copy_index == dublicate_data.limit){
				$(self.form).find('#anketa_group_dublicate_'+group_id).hide();
			} else if (copy_index > dublicate_data.limit) {
				return false;
			};

			group_fields.each(function(){
				parent_row = $(this).parent('.sub-row');

				if (parent_row.next('.sub-row.dublicated').size() == 0) {
					$(this).parent('.sub-row').after('<div data-group-id="'+group_id+'" class="sub-row row-double dublicated new"></div>');

					if (copy_index == 1) {
						$(this).parent('.sub-row').addClass('group-'+group_id+'-donor')
					};
				};

				field_clone = $(this).clone().addClass('double');

				if (field_clone.hasClass('dublicator')) {
					if (copy_index == 1) {
						dublicate_button = field_clone.find('#anketa_group_dublicate_'+group_id);
					} else {
						dublicate_button = field_clone.find('#anketa_group_remove_'+group_id);
					};

					dublicate_button.val(dublicate_data.remove_text).attr('id', 'anketa_group_remove_'+group_id).attr('data-copy-index', copy_index).show();

					// Ð£Ð´Ð°Ð»ÐµÐ½Ð¸Ðµ Ð´ÑƒÐ±Ð»ÐµÐ¹ Ð³Ñ€ÑƒÐ¿Ð¿
					field_clone.find('[id*="anketa_group_remove"]').on('click', function(){
						var group_id = parseInt($(this).attr('id').replace('anketa_group_remove_','')),
							dublicate_params = self.groups[group_id].dublicate_params,
							copy_index = parseInt($(this).attr('data-copy-index'));

						anketaController.removeGroupDublicate(group_id, dublicate_params, copy_index);
					});	
				} else {
					field_clone.find('input[type="radio"], input[type="checkbox"]').prop('checked', false).parent('label[class*="control"]').removeClass('active').find('.ico').remove();
					field_clone.find('input[type="text"], input[type="email"], textarea').val('');
					field_clone.find('.control-select').val('').chosenDestroy();

					if (field_clone.find('input[type="radio"][checked]').size()){
						field_clone.find('input[type="radio"][checked]').prop('checked', true);
					}
					
					if (field_clone.find('input[type="checkbox"][checked]').size()){
						field_clone.find('input[type="checkbox"][checked]').prop('checked', true);
					}

					if (field_clone.find('.control-select option[selected]').size()){
						field_clone.find('.control-select').val(field_clone.find('.control-select option[selected]').val());
					}

					var regex = /\[([0-9]+)\]/;

					field_clone.find('[name*="field_"]').each(function(){
						
						if ($(this).attr('origin-name')) {
							dublicate_id = $(this).attr('origin-name');
						} else {
							dublicate_id = $(this).attr('name');
						};

						if (field_clone.attr('data-field-type') == 5) {
							dublicate_name = dublicate_id.replace('[]','') + '_dublicate_' + copy_index + '[]';
						} else {
							dublicate_name = dublicate_id + '_dublicate_' + copy_index;
						};


						$(this).attr('name', dublicate_name).attr('origin-name', dublicate_id).attr('id', dublicate_name);
					});

					if (field_clone.find('.calendar-label').length) {
						field_clone.find('.calendar-label').each(function(){

							if ($(this).attr('origin-id')) {
								$(this).attr('origin-id', $(this).attr('origin-id'));
							} else {
								$(this).attr('origin-id', $(this).attr('id'));
							};

							dublicate_id = $(this).attr('origin-id') + '_dublicate_' + copy_index;

							$(this).attr('id', dublicate_id);
						});
					};
				};

				$(this).parent('.sub-row').next('.sub-row.dublicated.new').append(field_clone.attr('data-copy-index', copy_index));
			});

			$('.sub-row.dublicated[data-group-id="'+group_id+'"]').each(function(){
				var next_row = $(this).next('.sub-row').not('.dublicated');

				$(this).attr('data-copy-index', copy_index).removeClass('new');

				if (
					next_row.next('.sub-row').hasClass('dublicated') &&
					next_row.next('.sub-row').attr('data-group-id') == group_id
					) {
						prev_rows.push($(this).attr('data-copy-group-index', copy_group_index).get(0));
				} else {
					if ($(this).prev('.sub-row').not('.row-double').prev('.sub-row.row-double').get(0)) {
						last_rows.push($(this).get(0));
						copy_group_index++;
					};
				};
			});

			$('.sub-row.row-double[data-group-id="'+group_id+'"]').find(self.field+'.double').each(function(){
				if ($(this).attr('data-field-type') == 0) {
					$(this).attr('data-field-id', 'dublicator_'+$(this).attr('data-group-id')+'_'+copy_index);
				} else {
					$(this).attr('data-field-id', $(this).attr('data-field-id').replace(/_.*$/,"")+'_dublicate_'+copy_index);

					if ($(this).attr('data-field-type') == 10) {
						self.calendarInit($(this), false);
					} else if ($(this).attr('data-field-type') == 11) {
						self.calendarInit($(this), true);
					};
				};
			});

			for (var i = 0; i < prev_rows.length; i++) {
				var index = parseInt($(prev_rows[i]).attr('data-copy-group-index')) - 1;

				$(prev_rows[i]).insertBefore(last_rows[index]);
			};

			$('.sub-row.dublicated[data-group-id="'+group_id+'"]').each(function(){
				$(this).removeClass('dublicated');
			});

			self.groupsAttachInit();

			$(self.form).ChangeControls();
		},

		removeGroupDublicate: function(group_id, params, copy_index){
			var self = this,
				limit_exceeded_butt = $(self.form).find('#anketa_group_dublicate_'+group_id),
				counter,
				sub_counter,
				sub_rows_count,
				calendar_id,
				dublicate_id,
				dublicate_field,
				links;

			$(self.form).find('.sub-row[data-group-id="'+group_id+'"][data-copy-index="'+copy_index+'"]').find('.anketa-group-toggler').each(function(){
				dublicate_id    = $(this).parents(self.field).attr('data-field-id');
				dublicate_field = $(self.form).find(self.field+'[link-'+dublicate_id+']');

				if (dublicate_field && dublicate_field.length) {
					if (
						($(this).prop('checked') == true && $(this).is('input[type="radio"]') || $(this).is('input[type="checkbox"]')) ||
						$(this).val() != '' && $(this).is('select')
					) {
						links = dublicate_field.attr('linked-to').split(',');
						for (var l = 0; l < links.length; l++) {
							if (links[l] == dublicate_id) {
								delete links[l];
							};
						};

						dublicate_field.attr('linked-to', links.toString().replace(/^,|,$/g,''));
						dublicate_field.removeAttr('link-'+dublicate_id)

						if (dublicate_field.attr('linked-to') == '') {
							dublicate_field.toggleClass('hidden');
						};
					};
				};
			});

			$(self.form).find('.sub-row[data-group-id="'+group_id+'"][data-copy-index="'+copy_index+'"]').remove();

			var origin_fields = $(self.form).find(self.field+'[data-group-id="'+group_id+'"]').not('.double').size(),
				all_fields    = $(self.form).find(self.field+'[data-group-id="'+group_id+'"]').size(),
				copies_count  = all_fields/origin_fields - 1;

			if (copies_count < params.limit && limit_exceeded_butt.not(':visible')) {
				limit_exceeded_butt.show();
			};

			$(self.form).find(self.row).each(function(){
				if ($(this).find('.sub-row[data-group-id="'+group_id+'"]').length) {
					counter     = 1;
					sub_counter = 0;

					sub_rows_count = $(this).find('.sub-row.group-'+group_id+'-donor').size();

					$(this).find('.sub-row[data-group-id="'+group_id+'"]').each(function(){
						$(this).attr('data-copy-index', counter)
							.find(self.field).attr('data-copy-index', counter)
							.find('[id*="anketa_group_remove"]').attr('data-copy-index', counter);

						$(this).find('[name*="field_"]').each(function(){
							$(this).attr('name', $(this).attr('name').replace(/dublicate_\d/, 'dublicate_'+counter));
							$(this).attr('id', $(this).attr('id').replace(/dublicate_\d/, 'dublicate_'+counter));
						});

						if ($(this).find('.calendar-label').length) {
							$(this).find('.calendar-label').each(function(){
								calendar_id = $(this).attr('id').replace(/dublicate_(\d*)/, 'dublicate_'+counter);
								$(this).attr('id', calendar_id);
							});
						};

						if ($(this).find('.init-calendar').length) {
							$(this).find('.init-calendar').each(function(){
								self.calendarInit($(this).parents(self.field), $(this).hasClass('calendar-label'));
							});
						};

						if ($(this).find('.init-calendar-interval').length) {
							$(this).find('.init-calendar-interval').each(function(){
								calendar_id = $(this).attr('id').replace(/dublicate_(\d*)/, 'dublicate_'+counter);
								$(this).attr('id', calendar_id).attr('name', calendar_id);
							});
						};

						sub_counter++;

						if (sub_rows_count == 1) {
							counter++;
						} else {
							if (sub_counter%sub_rows_count == 0) {
								counter++;
							};							
						};
					});
				};
			});
		},

		toggleGroup: function(group_ids, elem, field_id) {
			var self = this,
				group_ids = group_ids.split(','),
				dependence_type,
				toggle_fields,
				field,
				value = elem.val(),
				condition;

			if (group_ids.length) {
				for (var i = 0; i < group_ids.length; i++) {
					if (!self.groups[group_ids[i]]) {
						return false;
					};
					dependence_type = self.groups[group_ids[i]].attach_params.dependence;

					if (dependence_type == "") {
						return false;
					};

					toggle_fields   = self.groups[group_ids[i]].attach_params.fields;

					for (f_key in toggle_fields) {
						field = $(self.form).find(self.field+'[data-group-id="'+group_ids[i]+'"]');

						if ($.isArray(toggle_fields[f_key]['field_options']) == true || $.isPlainObject(toggle_fields[f_key]['field_options'])) {
							if (toggle_fields[f_key]['field_id'] == field_id) {

								// IF CHECKBOX GROUP
								if (elem.is('input[type="checkbox"]')) {
									if ($.isArray(self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'])) {
										if (
											self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'] == value ||
											$.inArray(value, self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) >= 0
											) {
											if (elem.prop('checked') == true) {
												condition = true;
											} else {
												condition = false;
											};
											self.toggle_fields(elem, field, field_id, dependence_type, condition);
										};
									} else {
										for (c_key in self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) {
											if (self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'][c_key] == value) {
												if (elem.prop('checked') == true) {
													condition = true;
												} else {
													condition = false;
												};

												self.toggle_fields(elem, field, field_id, dependence_type, condition);
											};
										};
									};
								// IF RADIO, SELECT, MULTISELECT
								} else {
									// IF MULTISELECT
									if ($.isArray(value)) {
										condition = false;
										
										for (var j = 0; j < value.length; j++) {
											if ($.inArray(value[j], self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) >= 0) {
												condition = true;
											} else {
												for (m_key in self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) {
													if (value[j] == self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'][m_key]) {
														condition = true;
													};
												};
											};
											self.toggle_fields(elem, field, field_id, dependence_type, condition, value);
										};
									} else {
										// IF RADIO
										if (elem.is('input[type="radio"]')) {
											if ($.isArray(self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'])) {
												if ($.inArray(value, self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) >= 0) {
													condition = true;
												} else {
													condition = false;
												};
												self.toggle_fields(elem, field, field_id, dependence_type, condition);
											} else {
												for (o_key in self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) {
													if (self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'][o_key] == value) {
														condition = true;
													} else {
														condition = false;
													};

													self.toggle_fields(elem, field, field_id, dependence_type, condition);
												};
											};
										} else {
										// IF SELECT
											if ($.isArray(self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'])) {
												if ($.inArray(value, self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) >= 0) {
														condition = true;
												} else {
													condition = false;
												};
												self.toggle_fields(elem, field, field_id, dependence_type, condition);
											} else {
												condition = false;

												for (v_key in self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options']) {

													if (self.groups[group_ids[i]]['attach_params']['fields'][field_id]['field_options'][v_key] == value) {
														condition = true;
													};
													self.toggle_fields(elem, field, field_id, dependence_type, condition);
												};
											};
										};
									};
								};
							};
						} else if (elem.is('input[type="checkbox"]')) {
							// IF CHECKBOX
							if (toggle_fields[f_key]['field_id'] == field_id) {
								if (elem.prop('checked') == true) {
									self.toggle_fields(elem, field, field_id, dependence_type, true);
								} else {
									self.toggle_fields(elem, field, field_id, dependence_type, false);
								};
							};
						};
					};
				};
			};
		},

		toggle_fields: function(elem, fields, field_id, dependence_type, condition, value){
			var self            = this,
				field_id        = parseInt(field_id),
				field_group_id  = elem.parents(self.field).attr('data-group-id'),
				dependence_type = parseInt(dependence_type),
				n_links         = [], 
				u_links         = [],
				l_count,
				t_field_id,
				t_field_cond,
				dep_groups,
				cleared_dep_groups = [];

			if (elem.parents(self.field).hasClass('double')) {
				field_id = elem.parents(self.field).attr('data-field-id');
			};

			if (!fields) {
				return false;
			};

			if (condition == true) {
				if (fields.attr('linked-to')) {
					fields.each(function(){
						links = $(this).attr('linked-to');
						n_links = links+','+field_id;

						$.each(n_links.split(','), function(i, el){
							if($.inArray(el, u_links) === -1) u_links.push(el);
						});

						$(this).attr('linked-to', u_links.toString());
					});
				} else {
					fields.each(function(){
						$(this).attr('linked-to', field_id);
					});
				};

				if (fields.attr('link-'+field_id)) {
					fields.each(function(){
						if (value) {
							if (value == 0) {
								l_count = 0;
							} else if (value.length){
								if (value.length == 1) {
									l_count = 1;
								} else {
									l_count = 0;
								};
							};
						} else {
							l_count = parseInt($(this).attr('link-'+field_id)) + 1;
						};

						$(this).attr('link-'+field_id, l_count);
					});
				} else {
					fields.each(function(){
						$(this).attr('link-'+field_id, 1);
					});
				};

				if (dependence_type == 1) {
					fields.removeClass('hidden').removeAttr('data-anketa-disabled-field');
					self.toggleFieldsRequire(fields, 'add');

					fields.each(function(){
						if (!$(this).hasClass('dublicator')) {
							t_field_id = parseInt($(this).attr('data-field-id'));
							t_field_cond = $(self.form).find('#dep_'+t_field_id);

							t_field_cond.val("shown");
						};
					});
				} else {
					fields.addClass('hidden').attr('data-anketa-disabled-field', true);
					self.toggleFieldsRequire(fields, 'remove');

					fields.each(function(){
						if (!$(this).hasClass('dublicator')) {
							t_field_id = parseInt($(this).attr('data-field-id'));
							t_field_cond = $(self.form).find('#dep_'+t_field_id);

							t_field_cond.val("hidden");
						};
					});
				};
			} else {
				fields.each(function(){
					if ($(this).attr('linked-to')) {
						links = $(this).attr('linked-to').split(',');
						l_count = parseInt($(this).attr('link-'+field_id));

						if (l_count <= 0 || !l_count) {
							l_count = 0;
						} else {
							l_count = parseInt($(this).attr('link-'+field_id))-1;
						};

						$(this).attr('link-'+field_id, l_count);

						if (l_count == 0) {
							$(this).removeAttr('link-'+field_id);
						};

						for (var l = 0; l < links.length; l++) {
							if (links[l] == field_id && l_count == 0) {
								delete links[l];
							};
						};

						$(this).attr('linked-to', links.toString().replace(/^,|,$/g,''));

						if ($(this).attr('linked-to') == '') {
							if (dependence_type == 1) {
								$(this).addClass('hidden').attr('data-anketa-disabled-field', true);
								self.toggleFieldsRequire(fields, 'remove');

								if (!$(this).hasClass('dublicator')) {
									t_field_id = parseInt($(this).attr('data-field-id'));
									t_field_cond = $(self.form).find('#dep_'+t_field_id);

									t_field_cond.val("hidden");
								};
							} else {
								$(this).removeClass('hidden').removeAttr('data-anketa-disabled-field');
								self.toggleFieldsRequire(fields, 'add');

								if (!$(this).hasClass('dublicator')) {
									t_field_id = parseInt($(this).attr('data-field-id'));
									t_field_cond = $(self.form).find('#dep_'+t_field_id);

									t_field_cond.val("shown");
								};
							};
						};
					} else {
						if (dependence_type == 1) {
							$(this).addClass('hidden').attr('data-anketa-disabled-field', true);
							self.toggleFieldsRequire(fields, 'remove');

							if (!$(this).hasClass('dublicator')) {
								t_field_id = parseInt($(this).attr('data-field-id'));
								t_field_cond = $(self.form).find('#dep_'+t_field_id);

								t_field_cond.val("hidden");
							};
						} else {
							$(this).removeClass('hidden').removeAttr('data-anketa-disabled-field');
							self.toggleFieldsRequire(fields, 'add');

							if (!$(this).hasClass('dublicator')) {
								t_field_id = parseInt($(this).attr('data-field-id'));
								t_field_cond = $(self.form).find('#dep_'+t_field_id);

								t_field_cond.val("shown");
							};
						};
					};

					if ($(this).attr('data-call-groups')) {
						dep_groups = $(this).attr('data-call-groups').split(',');

						for (var i = 0; i < dep_groups.length; i++) {
							if (dep_groups[i] != field_group_id) {
								cleared_dep_groups.push(dep_groups[i]);
							};
						};

						self.checkForSubDependence(cleared_dep_groups.toString());
					} else {
						self.checkForSubDependence($(this).attr('data-call-groups'));
					};

					$(this).removeAttr('link-'+$(this).attr('data-field-id'));
					$(this).find('input[type="radio"], input[type="checkbox"]').prop('checked', false).end().find('select').val('').trigger("chosen:updated");
				});
			};
		},

		checkForSubDependence: function(dep_groups){
			var self = this,
				dep_field,
				dep_field_id,
				dep_field_group_id;

			if (!dep_groups) {
				return false;
			};

			dep_groups = dep_groups.split(',');

			for (key in dep_groups){
				dep_field          = $(self.form).find(self.field+'[data-group-id="'+dep_groups[key]+'"]');
				dep_field_id       = dep_field.attr('data-field-id');
				dep_field_group_id = dep_field.attr('data-group-id');
				dep_field_cond     = $(self.form).find('#dep_'+dep_field_id);

				if (self.groups[dep_field.attr('data-group-id')]) {
					if (self.groups[dep_field.attr('data-group-id')].attach_params.dependence == 1) {
						dep_field.addClass('hidden');

						if (dep_field_cond.length) {
							dep_field_cond.val('hidden');
						};
					} else if (self.groups[dep_field.attr('data-group-id')].attach_params.dependence == 2) {
						dep_field.removeClass('hidden').removeAttr('data-anketa-disabled-field');

						if (dep_field_cond.length) {
							dep_field_cond.val('shown');
						};
					};

					dep_field.find('input[type="radio"], input[type="checkbox"]').prop('checked', false).end().find('select').val('');
					dep_field.removeAttr('linked-to');

					for (a_key in self.groups[dep_field.attr('data-group-id')].attach_params.fields){
						dep_field.removeAttr('link-'+a_key);
					};

					self.checkForSubDependence(dep_field.attr('data-call-groups'));
				};
			};
		},

		toggleFieldsRequire: function(fields, command) {
			if (!fields || !command) {
				return false;
			};

			if (command == 'add') {
				fields.each(function(){
					if (!$(this).hasClass('dublicator')) {
						$(this).find('.required-control').attr('required', 'required');
					};
				});
			} else if (command == 'remove') {
				fields.each(function(){
					if (!$(this).hasClass('dublicator')) {
						$(this).find('.required-control').removeAttr('required');
					};
				});
			};
		},

		toggleCheckboxRequire: function(elem){
			if (!elem) {
				return false;
			};

			var self         = this,
				field_name   = $(elem).find('input[type="checkbox"]').attr('name'),
				group_fields = $(self.form).find('input[type="checkbox"][name="'+field_name+'"]'),
				checked      = false;

			setTimeout(function(){
				group_fields.each(function(){
					if ($(this).prop('checked') == true) {
						checked = true;
						return false;
					};
				});

				if (checked == true) {
					group_fields.removeAttr('required');
				} else {
					group_fields.attr('required', 'required');
				};
			}, 200);
		},

		toggleFieldError: function(field, command){
			if (!field) {
				return false;
			};

			var self = this,
				field_parent = $(field).parents('.field-value'),
				field_error = field_parent.find('.field-error');

			if (command == 'show') {
				field_error.show();
			} else if (command == 'hide'){
				field_error.hide();
			};
		},

		getAnketaStructure: function() {
			var self           = this,
				structure_data = {},
				results        = {};

			if (!self.anketa_id) {
				s3.alert('No anketa_id');
				return false;
			};
			
			structure_data.rows        = {};
			structure_data.fields      = {};
			structure_data.dublicators = {};

			$(self.form).find(self.row_box).each(function(){
				var index = $(this).index();
				structure_data.rows[index] = {};

				if ($(this).attr('data-cols')) {
					var cols_count = parseInt($(this).attr('data-cols'));
				} else {
					var cols_count = 1;
				};

				structure_data.rows[index].cols = {};

				$(this).find(self.row).each(function(){
					var row_index = $(this).index();

					structure_data.rows[index].cols[row_index]          = {};
					structure_data.rows[index].cols[row_index].width    = $(this).width();
					structure_data.rows[index].cols[row_index].sub_rows = {};

					$(this).find('.sub-row').each(function(){
						var sub_row_index = $(this).index();

						structure_data.rows[index].cols[row_index].sub_rows[sub_row_index] = {};
						structure_data.rows[index].cols[row_index].sub_rows[sub_row_index].fields = {};

						$(this).find(self.field).each(function(){
							var field_id    = $(this).attr('data-field-id'),
								field_type  = parseInt($(this).attr('data-field-type')),
								field_index = $(this).index(),
								group_id    = $(this).attr('data-group-id'),
								structure_params;

							structure_params = {
								'index'   : field_index,
								'row'     : index,
								'col'     : row_index,
								'sub_row' : sub_row_index,
								'group_id': group_id,
							};

							if (field_type == 0) {
								structure_data.dublicators[field_id]               = structure_params;
								structure_data.dublicators[field_id].type_code     = "DUBLICATOR";
								structure_data.dublicators[field_id].type_id       = "0";
								structure_data.dublicators[field_id].dictionary_id = field_id;
							} else {
								structure_data.fields[field_id] = structure_params;
							};

							if ($(this).attr('data-group-id')) {
								if (field_type == 0) {
									structure_data.dublicators[field_id].group_id = $(this).attr('data-group-id');
								} else {
									structure_data.fields[field_id].group_id = $(this).attr('data-group-id');
								};
							};
						});
					});
				});
			});

			$(self.form).find('#anketa_structure').val(JSON.stringify(structure_data));

			var field_id,
				field_value;

			$(self.form).find(self.field).each(function(){
				field_id = $(this).attr('data-field-id');

				if (!$(this).attr('data-anketa-disabled-field')) {
					$(this).find('.control-value').each(function(){
						if ($(this).is('input[type="radio"]') || $(this).is('input[type="checkbox"]')) {
							if ($(this).prop('checked') == true) {
								field_value = $(this).val();

								if (results[field_id] && results[field_id] != "") {
									results[field_id] += ','+field_value;
								} else {
									results[field_id] = field_value;
								};
							};
						} else {

							if ($(this).val() != "") {
								field_value       = $(this).val();
								results[field_id] = field_value;
							};
						};
					});
				}

			});

			$(self.form).find('#anketa_results').val(JSON.stringify(results));
		},
	};
	
})(jQuery);