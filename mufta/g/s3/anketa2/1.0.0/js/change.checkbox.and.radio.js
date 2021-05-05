(function($) {
	$.fn.checkboxClickFunction = function(event, from_controller, callback, wcond) {
		//event.stopPropagation();
		if (from_controller || $(event.target).is('input')) {
			//event.preventDefault();
			var el = $(this).find('input'),
				el_parent = $(this),
				group = $('input[name="' + el.eq(0).attr('name') + '"]'),
				add_class,
				class_target,
				callback_attr,
				SD,
				SD_chbox = $(''),
				wcond = (wcond === 0 || wcond === -1 || parseInt(wcond) > 0) ? true : false ; // SD - Selector Data

			add_class     = $(this).data('add-class');
			class_target  = $($(this).data('class-target'));
			callback_attr = el.data('callback');

			if (el.is(':disabled')) {
				return false;
			};

			if (el.attr('target')) {
				SD_chbox = el;
			} else if (el.attr('parent')) {
				SD_chbox = $(el.attr('parent'));
			};

			if (SD_chbox.size()) {
				SD = {
					'empty-text': SD_chbox.data('selector-empty-text'),
					'xelem-text': SD_chbox.data('selector-xelem-text'),
					'text-target': $(SD_chbox.data('selector-text-target')),
					'checked-all': $(SD_chbox.data('selector-checked-all')),
					'checked-all-wcond': $(SD_chbox.data('selector-checked-all-wcond'))
				};
			};


			if (from_controller == true) {
				if (el.is(':checked')) {
					if (wcond) {
						SD['checked-all'].removeClass('active');
						SD['checked-all-wcond'].addClass('active');
						SD['text-target'].text(SD['checked-all-wcond'].text());
					} else {
						SD['checked-all-wcond'].removeClass('active');
						SD['checked-all'].addClass('active');
						SD['text-target'].text(SD['checked-all'].text());
					};
					return;
				} else {
					el.prop('checked', true);
				};
			};

			if (el.attr('target')) {

				if (el_parent.is('.half-active')) {
					el.prop('checked', true);
				}
				$(el.attr('target')).find('label.control-checkbox').each(function() {
					var add_class,
					    class_target;

					add_class    = $(this).data('add-class');
					class_target = $($(this).data('class-target'));
					if (el.is(':checked')) {
						el_parent.removeClass('half-active');
						$(this).addClass('active').find('input').prop('checked', true);

						if (class_target.size()) {
							class_target.addClass(add_class);
						}
					} else {
						$(this).removeClass('active').find('input').prop('checked', false);
						if (class_target.size()) {
							class_target.removeClass(add_class);
						};
					};
				});
				if (el.is(':checked')) {
					if (wcond) {
						SD['checked-all'].removeClass('active');
						SD['checked-all-wcond'].addClass('active');
						SD['text-target'].text(SD['checked-all-wcond'].text());
					} else {
						SD['checked-all-wcond'].removeClass('active');
						SD['checked-all'].addClass('active');
						SD['text-target'].text(SD['checked-all'].text());
					}
				} else {
					SD['checked-all'].removeClass('active');
					SD['checked-all-wcond'].removeClass('active');
					SD['text-target'].text(SD['empty-text']);
				};
			};
			if (el.attr('parent')) {
				var parent_chbox = $(el.attr('parent')),
					parent = parent_chbox.parent(),
					parent_add_class    = parent.data('add-class'),
					parent_class_target = $(parent.data('class-target')),
					group = el.parents('.cb-group:first'),
					checked_size = group.find('input:checked').size(),
					unchecked_size = group.find('input').not(':checked').size(),
					all_size = group.find('input').size();

				if (el.is(':checked')) {
					if (all_size == checked_size && all_size != 0) {
						parent.removeClass('half-active').addClass('active').find('input').prop('checked', true);
						parent_class_target.addClass(parent_add_class);
						if (wcond) {
							SD['checked-all'].removeClass('active');
							SD['checked-all-wcond'].addClass('active');
						} else {
							SD['checked-all-wcond'].removeClass('active');
							SD['checked-all'].addClass('active');
						}
						SD['text-target'].text(SD['checked-all'].text());
					} else {
						parent.addClass('half-active').find('input').prop('checked', false);
						parent_class_target.addClass(parent_add_class);
						SD['checked-all'].removeClass('active');
						SD['checked-all-wcond'].removeClass('active');
						SD['text-target'].text(SD['xelem-text'] + ' (' + checked_size + ')');
					};
				} else {
					if (unchecked_size == all_size && all_size != 0) {
						parent.removeClass('active').removeClass('half-active').find('input').prop('checked', false);
						parent_class_target.removeClass(parent_add_class);
						SD['checked-all'].removeClass('active');
						SD['checked-all-wcond'].removeClass('active');
						SD['text-target'].text(SD['empty-text']);
					} else if (checked_size != 0 && unchecked_size != 0) {
						parent.removeClass('active').addClass('half-active').find('input').prop('checked', false);
						parent_class_target.addClass(parent_add_class);
						SD['checked-all'].removeClass('active');
						SD['checked-all-wcond'].removeClass('active');
						SD['text-target'].text(SD['xelem-text'] + ' (' + checked_size + ')');
					};
				};
			};

			if (el.is(':checked')) {
				if (el.attr('type') == 'radio') {
					group.each(function() {
						$(this).prop('checked', false).parent().removeClass('active');
					})
				}
				el.prop('checked', true);
				$(this).addClass('active');
			} else {
				el.prop('checked', false);
				$(this).removeClass('active');
			};

			if (el.is(':checked')) {
				if (class_target.size()) {
					class_target.addClass(add_class);
				};
			} else {
				if (class_target.size()) {
					class_target.removeClass(add_class);
				};
			};

			try {
				eval(callback_attr);
			} catch (e) {};
			if (callback != undefined && typeof callback == 'function') {
				callback(event, el.is(':checked'));
			};
		};
	};
	$.fn.changeCheckboxAndRadio = function(callback) {
		return this.each(function() {
			var $this = $(this),
				el = $this.find('input[type="checkbox"], input[type="radio"]'),
				add_class,
				class_target;


			if ($this.data('ControlInit')) { //update checkbox|radio if already init
				if (el.is(':disabled')) {
					$this.addClass('disabled');
				} else {
					$this.removeClass('disabled');
				};
				if (el.is(':checked')) {
					$this.addClass('active');
				} else {
					$this.removeClass('active');
				};
			} else {

				$this.data('ControlInit', true);

				add_class    = $this.data('add-class');
				class_target = $($this.data('class-target'));

				$('<span class="ico"></span>').insertAfter(el);

				var ico        = el.next('.ico'),
					ico_width  = ico.width();

				el.css({
					'margin-right' : (ico_width * -1) - 2
				})

				if (el.is(':disabled')) {
					$this.addClass('disabled');
				};
				if (el.is(':checked')) {
					$this.addClass('active');
				};

				$this.click(function(event) {
					$this.checkboxClickFunction(event, false, callback);
				});

			}

		});
	};
})(jQuery);