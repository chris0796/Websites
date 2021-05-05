var col_user = 0;

$(document).ready(function() {
    col_user = 1;
   
    init_btn();
    init_calc(col_user, 'utcrmbuh');
    
    $('input[name="config"]').click(function() {
        init_calc($('input[name="col_user"]').val(), $(this).val());
    });
    
    $('input[name="config2"]').click(function() {

        switch($(this).val()) {
            case 'local_support' :
                if($(this).is(':checked')) {
                    echo_local_support();
                } else {
                    hide_local_support();
                }
                break;
            case 'msoffice' :
                if($(this).is(':checked')) {
                    echo_msoffice();
                } else {
                    hide_msoffice();
                }
                break;
            case '1clicense' :
                if($(this).is(':checked')) {
                    enable_oneclicense();
                } else {
                    desable_oneclicense();
                }
                break;
        }
    });
    
    $('input[name="col_user"]').keyup(function() {
        var cols_user = $(this).val();
        var regEx = /[A-Za-zА-Яа-я]+/;
        
        if(parseInt(cols_user) == 0) {
            alert('Значние 0 недопустимо.');
            $(this).val(1);
        }
        
        if(parseInt(cols_user) > 30 && cols_user.length == 2) {
            alert('Стоимость свыше 30 пользователей расчитывается индивидуально. Позвоните нам! +7 (495) 230-03-03');
            $(this).val(30);
        }
        
        if(regEx.test(cols_user)) {
            alert('Символы недопустимы.')
            $(this).val(1);
        }
        
        init_calc(cols_user, $('input[name="config"]:checked').val());
        
        if($('input[value="msoffice"]').is(':checked')) {
            echo_msoffice();
        } else {
            hide_msoffice();
        }
        
        if($('input[value="1clicense"]').is(':checked')) {
            enable_oneclicense();
        } else {
            desable_oneclicense();
        }
    });
    
    $('.q-mark').hover(function() {
        var idJSON = $(this).attr('id');
        var obj = this;
        $.getJSON('../json/base.json', function(data) {
            
            $(obj).after('<div class="text-block">' + data.hints[0][idJSON] + '</div>');
            $('.text-block').stop(true, true).hide();
            $('.text-block').stop(true, true).fadeIn('slow');
        });
    }, function() {
        $('.text-block').stop(true, true).fadeOut('slow', function() {
            $(this).remove();
        });
    });
});


function init_calc(col_user, config) {
    var col_ownserver = init_col_ownserver(col_user);
    var col_cloud = init_col_cloud(col_user);

    $.getJSON('../json/base.json', function(data) {
        var values = {
            'cost_device' : data.ownserver[0][config][0][col_ownserver][0].cost_device,
            'info_device' : data.ownserver[0][config][0][col_ownserver][0].info_device,
            'outsource_it_mounth' : data.ownserver[0][config][0][col_ownserver][0].outsource_it_mounth,
            'pomicrosoftoffcie' : 0,
            'poonec' : 0,
            'regular_expenses' : data.ownserver[0][config][0][col_ownserver][0].regular_expenses,
            'work_for_settings' : data.ownserver[0][config][0][col_ownserver][0].work_for_settings,
            'local_support' : 0,
            'pomicrosoft' : 0,

            'cost_device_cloud' : data.cloud[0][config][0][col_cloud][0].cost_device,
            'info_device_cloud' : data.cloud[0][config][0][col_cloud][0].info_device,
            'server_mounth_cloud' : data.cloud[0][config][0][col_cloud][0].server_mounth,
            'pomicrosoftoffcie_cloud' : 0,
            'poonec_cloud' : 0,
            'regular_expenses_cloud' : data.cloud[0][config][0][col_cloud][0].regular_expenses,
            'work_for_settings_cloud' : data.cloud[0][config][0][col_cloud][0].work_for_settings,
            'local_support_cloud' : 0,
            'pomicrosoft_cloud' : 0,
            
            'license_server' : data.config[0].license_server,
            'license_user' : data.config[0].license_user,
            'license_terminal' : data.config[0].license_terminal
        };
        
        print_all_values(values);
        count_all_results();
        rentability();
    });
    
    if($('input[value="1clicense"]').is(':checked')) {
        enable_oneclicense();
    }
    if($('input[value="msoffice"]').is(':checked')) {
        echo_msoffice();
    }
}

function init_btn() {
    $('input[value="utcrmbuh"]').attr('checked', true);
}

function init_col_ownserver(col_user) {
    if(col_user <= 10) {
        col_user = 'ten';
    } else if(col_user > 10 && col_user <= 15) {
        col_user = 'fifteen';
    } else if(col_user > 15 && col_user <= 30) {
        col_user = 'thirty';
    } else if(col_user > 30 && col_user <= 50) {
        col_user = 'fifty';
    }
    
    return col_user;
}

function init_col_cloud(col_user) {
    if(col_user <= 6) {
        col_user = 'six';
    } else if(col_user > 6 && col_user <= 15) {
        col_user = 'fifteen';
    } else if(col_user > 15 && col_user <= 30) {
        col_user = 'thirty';
    } else if(col_user > 30) {
        col_user = 'after_thirty';
    }
    
    return col_user;
}

function count_all_results() {
    var ELmonthly_costs1 = $('.mounth_costs span.cost1');
    var ELrecurring_expenses1 = $('.one_off_cost span.cost1');
    
    var ELmonthly_costs2 = $('.mounth_costs span.cost2');
    var ELrecurring_expenses2 = $('.one_off_cost span.cost2');
    
    var ELdifference_cost = $('.difference_cost span.cost1')
    
    if(monthly_costs1() != 0) {
        ELmonthly_costs1.text(monthly_costs1().toFixed(3));
        ELmonthly_costs1.attr('cost', monthly_costs1().toFixed(3));
    } else {
        ELmonthly_costs1.text(monthly_costs1() + ' руб.');
        ELmonthly_costs1.attr('cost', monthly_costs1());
    }
        
    if(recurring_expenses1() != 0) {
        ELrecurring_expenses1.text(recurring_expenses1().toFixed(3));
        ELrecurring_expenses1.attr('cost', recurring_expenses1().toFixed(3))
    } else {
        ELrecurring_expenses1.text(recurring_expenses1() + ' руб.');
        ELrecurring_expenses1.attr('cost', recurring_expenses1())
    }
   
    if(monthly_costs2() != 0) {
        ELmonthly_costs2.text(monthly_costs2().toFixed(3) + ' руб.');
        ELmonthly_costs2.attr('cost', monthly_costs2().toFixed(3));
    } else {
        ELmonthly_costs2.text(monthly_costs2() + ' руб.');
        ELmonthly_costs2.attr('cost', monthly_costs2());
    }
   
    if(recurring_expenses2() != 0) {
        ELrecurring_expenses2.text(recurring_expenses2().toFixed(3) + ' руб.');
        ELrecurring_expenses2.attr('cost', recurring_expenses2().toFixed(3));
    } else {
        ELrecurring_expenses2.text(recurring_expenses2() + ' руб.');
        ELrecurring_expenses2.attr('cost', recurring_expenses2().toFixed(3));
    }
    
    if(monthly_costs1() != 0) {
        ELdifference_cost.text(defferent_mounth().toFixed(3) + ' руб.');
        ELdifference_cost.attr('cost', defferent_mounth().toFixed(3));
    } else {
        ELdifference_cost.text(defferent_mounth());
        ELdifference_cost.attr('cost', defferent_mounth());
    }
}

function print_all_values(values) {
    var regExFloat = /[0-9]+\.[0-9]+/;

    var license_server = values.license_server;
    var license_user = values.license_user;
    var license_terminal = values.license_terminal;
    var col_user = $('input[name="col_user"]').val();
    
    var pomicrosoft = parseFloat(license_server) + parseFloat(license_user) + parseFloat(license_terminal);
    $.each(values, function(index, value) {
        if(regExFloat.test(value)) {
            value = parseFloat(value).toFixed(3);
        } else if(index == 'info_device' || index == 'info_device_cloud') {
            value = value;
        } else {
            value = parseInt(value);
        }
        switch(index) {
            case 'info_device' :
                $('#info_device').html(value);
                $('#info_device').attr('cost', value);
                break;
            case 'cost_device' :
                $('#cost_device b span').text(value);
                $('#cost_device b span').attr('cost', value);
                break;
            case 'regular_expenses' :
                $('#regular_expenses b span').text(value);
                $('#regular_expenses b span').attr('cost', value);
                break;
            case 'outsource_it_mounth' :
                $('#outsource_it_mounth b span').text(value);
                $('#outsource_it_mounth b span').attr('cost', value);
                break;
            case 'local_support' :
                $('#local_support > b > span').text(0);
                $('#local_support > b > span').attr('cost', 0);
                
                $('#local_support_cloud > b > span').text(0);
                $('#local_support_cloud > b > span').attr('cost', 0);
            case 'pomicrosoft' :
                if(pomicrosoft == 0) {
                    $('#pomicrosoct b span').text(pomicrosoft);
                    $('#pomicrosoct b span').attr('cost', pomicrosoft);
                } else {
                    $('#pomicrosoct b span').text(pomicrosoft.toFixed(3));
                    $('#pomicrosoct b span').attr('cost', pomicrosoft.toFixed(3));                    
                }
                break;
            case 'poonec' :
                if($('input[value="1clicense"]').not(':checked')) {
                    $('#poonec b span').text(value);
                    $('#poonec b span').attr('cost', value);
                } else {
                    var poonec = value * col_user;
                    $('#poonec b span').text(poonec.toFixed(3));
                    $('#poonec b span').attr('cost', poonec.toFixed(3));
                }
                break;
            case 'pomicrosoftoffcie' :
                if(value == 0) {
                    $('#msoffice b span').text(value);
                    $('#msoffice b span').attr('cost', value);
                } else {
                    var msoffice = value * col_user;
                    $('#msoffice b span').text(msoffice.toFixed(3));
                    $('#msoffice b span').attr('cost', msoffice.toFixed(3));
                }
                break;
            case 'work_for_settings' :
                $('#work_for_settings b span').text(value);
                $('#work_for_settings b span').attr('cost', value);
                break;
            case 'info_device_cloud' :
                $('#info_cloud').html(value);
                $('#info_cloud').attr('cost', value);
                break;
            case 'cost_device_cloud' :
                $('#cost_device_cloud b span').text(value);
                $('#cost_device_cloud b span').attr('cost', value);
                break;
            case 'regular_expenses_cloud' :
                $('#regular_expenses_cloud b span').text(value);
                $('#regular_expenses_cloud b span').attr('cost', value);
                break;
            case 'server_mounth_cloud' :
                $('#server_mounth_cloud b span').text(value);
                $('#server_mounth_cloud b span').attr('cost', value);
                break;
            case 'pomicrosoft_cloud' :
                if(pomicrosoft == 0) {
                    $('#pomicrosoft_cloud b span').text(pomicrosoft);
                    $('#pomicrosoft_cloud b span').attr('cost', pomicrosoft);                
                } else {
                    $('#pomicrosoft_cloud b span').text(pomicrosoft.toFixed(3));
                    $('#pomicrosoft_cloud b span').attr('cost', pomicrosoft.toFixed(3));
                }
                break;
            case 'poonec_cloud' :
                if($('input[value="1clicense"]').not(':checked')) {
                    $('#poonec_cloud b span').text(value);
                    $('#poonec_cloud b span').attr('cost', value);
                } else {
                    if(value == 0) {
                        $('#poonec_cloud b span').text(value);
                        $('#poonec_cloud b span').attr('cost', value);
                    } else {
                        var poonec_cloud = value * col_user;
                        $('#poonec_cloud b span').text(poonec_cloud.toFixed(3));
                        $('#poonec_cloud b span').attr('cost', poonec_cloud.toFixed(3));
                    }                    
                }
                break;
            case 'msoffice_cloud' :
                if(value == 0) {
                    $('#msoffice_cloud b span').text(value);
                    $('#msoffice_cloud b span').attr('cost', value);
                } else {
                    var msoffice_cloud = value * col_user;
                    $('#msoffice_cloud b span').text(msoffice_cloud.toFixed(3));
                    $('#msoffice_cloud b span').attr('cost', msoffice_cloud.toFixed(3));
                }
                break;
            case 'pomicrosoftoffcie_cloud' :
                $('#msoffice_cloud b span').text(value);
                $('#msoffice_cloud b span').attr('cost', value);
                break;
            case 'work_for_settings_cloud' :
                $('#work_for_settings_cloud b span').text(value);
                $('#work_for_settings_cloud b span').attr('cost', value);
                break;
            
        }
    });
    format_height();
}

function monthly_costs1() {
    var result = new Array();

    $('.description1 p').each(function(index) {
        switch(this.getAttribute('id')) {
            case 'regular_expenses' :
                result[0] = $('#regular_expenses > b > span').attr('cost');
                break;
            case 'outsource_it_mounth' :
                result[1] = $('#outsource_it_mounth > b > span').attr('cost');
                break;
        }
    });
    return parseFloat(result[0]) + parseFloat(result[1]);
}

function recurring_expenses1() {
    var result = new Array();
    
    $('.description1 p').each(function() {
        switch(this.getAttribute('id')) {
            case 'cost_device' :
                result[0] = $('#cost_device > b > span').attr('cost');
                break;
            case 'pomicrosoct' :
                result[1] = $('#pomicrosoct > b > span').attr('cost');
                break;
            case 'poonec' :
                result[2] = $('#poonec > b > span').attr('cost');
                break;
            case 'msoffice' :
                result[3] = $('#msoffice > b > span').attr('cost');
                break;
            case 'work_for_settings' :
                result[4] = $('#work_for_settings > b > span').attr('cost');
                break;
        }
    });
    return parseFloat(result[0]) + parseFloat(result[1]) + parseFloat(result[2]) + parseFloat(result[3]) + parseFloat(result[4]);
}

function monthly_costs2() {
    var result = new Array();
    
    $('.description2 p').each(function() {

        switch(this.getAttribute('id')) {
            case 'server_mounth_cloud' :
                result[0] = $('#server_mounth_cloud > b > span').attr('cost');
                break;
            case 'local_support_cloud' :
                result[1] = $('#local_support_cloud > b > span').attr('cost');
                break;
            case 'pomicrosoft_cloud' :
                result[2] = $('#pomicrosoft_cloud > b > span').attr('cost');
                break;
            case 'poonec_cloud' :
                result[3] = $('#poonec_cloud > b > span').attr('cost');
                break;
            case 'msoffice_cloud' : 
                result[4] = $('#msoffice_cloud > b > span').attr('cost');
                break;
        }
    });

    return parseFloat(result[0]) + parseFloat(result[1]) + parseFloat(result[2]) + parseFloat(result[3]) + parseFloat(result[4]);
}

function recurring_expenses2() {
    var result = new Array();
    
    $('.description2 p').each(function() {

        switch(this.getAttribute('id')) {
            case 'cost_device_cloud' :
                result[0] = $('#cost_device_cloud > b > span').attr('cost');
                break;
            case 'work_for_settings_cloud' :
                result[1] = $('#work_for_settings_cloud > b > span').attr('cost');
                break;
        }
    });
    
    return parseFloat(result[0]) + parseFloat(result[1]);
}

function defferent_mounth() {
    var cloud = $('.mounth_costs span.cost2').attr('cost');
    var own = $('.mounth_costs span.cost1').attr('cost');
    var result;
    
    result = parseFloat(cloud) - parseFloat(own);
    
    
    return Math.abs(result);
}

function rentability() {
    var sum_recurring_expenses = $('.one_off_cost > span.cost1').attr('cost');
    var sum_difference_cost = $('.difference_cost > span.cost1').attr('cost');
    var result = 0;
    
    result = parseFloat(sum_recurring_expenses) / parseFloat(sum_difference_cost);
    
    $('.term_profitability > span.cost2').text(parseInt(result) + ' мес.');
    $('.term_profitability > span.cost2').attr('cost', parseInt(result));
}

function echo_local_support() {
    $.ajax({
        url: '../json/base.json',
        dataType: 'json',
        success: function(data) {
            var local_support = data.config[0].local_support;
            var local_support_cloud = data.config[0].local_support_cloud;

            $('#local_support > b > span').text(local_support);
            $('#local_support > b > span').attr('cost', local_support);

            $('#local_support_cloud > b > span').text(local_support_cloud);
            $('#local_support_cloud > b > span').attr('cost', local_support_cloud);

            if(monthly_costs2() != 0) {
                $('.mounth_costs > span.cost2').text(monthly_costs2().toFixed(3) + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2().toFixed(3));
            } else {
                $('.mounth_costs > span.cost2').text(monthly_costs2() + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2());
            }
            if(defferent_mounth() != 0) {
                $('.difference_cost > span.cost1').text(defferent_mounth().toFixed(3) + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth().toFixed(3));
            } else {
                $('.difference_cost > span.cost1').text(defferent_mounth() + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth());
            }

            $('.term_profitability > .cost2').text(rentability() + ' руб.');
            $('.term_profitability > .cost2').attr(rentability());
        }
    });
}

function hide_local_support() {
    $.ajax({
        url: '../json/base.json',
        dataType: 'json',
        success: function(data) {
            var local_support = 0;
            var local_support_cloud = 0;

            $('#local_support > b > span').text(local_support);
            $('#local_support > b > span').attr('cost', local_support);

            $('#local_support_cloud > b > span').text(local_support_cloud);
            $('#local_support_cloud > b > span').attr('cost', local_support_cloud);
            
            if(monthly_costs2() != 0) {
                $('.mounth_costs > span.cost2').text(monthly_costs2().toFixed(3) + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2().toFixed(3));
            } else {
                $('.mounth_costs > span.cost2').text(monthly_costs2() + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2());
            }
            if(defferent_mounth() != 0) {
                $('.difference_cost > span.cost1').text(defferent_mounth().toFixed(3) + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth().toFixed(3));
            } else {
                $('.difference_cost > span.cost1').text(defferent_mounth() + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth());
            }

            $('.term_profitability > .cost2').text(rentability() + ' руб.');
            $('.term_profitability > .cost2').attr(rentability());
        }
    });
}

function echo_msoffice() {
    var col_user = $('input[name="col_user"]').val();
    
    $.ajax({
        url: '../json/base.json',
        dataType: 'json',
        success: function(data) {
            var pomicrosoftoffce = parseFloat(data.config[0].pomicrosoftoffcie) * parseInt(col_user);
            var pomicrosoftoffce_cloud = parseFloat(data.config[0].pomicrosoftoffcie_cloud) * parseInt(col_user);


            if(pomicrosoftoffce == 0) {
                $('#msoffice > b > span').text(pomicrosoftoffce);
                $('#msoffice > b > span').attr('cost', pomicrosoftoffce);             
            } else {
                $('#msoffice > b > span').text(pomicrosoftoffce.toFixed(3));
                $('#msoffice > b > span').attr('cost', pomicrosoftoffce.toFixed(3));            
            }

            if(pomicrosoftoffce_cloud == 0) {
                $('#msoffice_cloud > b > span').text(pomicrosoftoffce_cloud);
                $('#msoffice_cloud > b > span').attr('cost', pomicrosoftoffce_cloud);            
            } else {
                $('#msoffice_cloud > b > span').text(pomicrosoftoffce_cloud.toFixed(3));
                $('#msoffice_cloud > b > span').attr('cost', pomicrosoftoffce_cloud.toFixed(3));
            }
            
            if(recurring_expenses1() != 0) {
                $('.one_off_cost > span.cost1').text(recurring_expenses1().toFixed(3));
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1().toFixed(3));
            } else {
                $('.one_off_cost > span.cost1').text(recurring_expenses1());
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1());
            }

            if(monthly_costs2() != 0) {
                $('.mounth_costs > span.cost2').text(monthly_costs2().toFixed(3) + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2().toFixed(3));
            } else {
                $('.mounth_costs > span.cost2').text(monthly_costs2() + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2());
            }

            if(defferent_mounth() != 0) {
                $('.difference_cost > span.cost1').text(defferent_mounth().toFixed(3) + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth().toFixed(3));
            } else {
                $('.difference_cost > span.cost1').text(defferent_mounth() + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth());
            }

            $('.term_profitability > .cost2').text(rentability() + ' руб.');
            $('.term_profitability > .cost2').attr(rentability());
        }
    });
}

function hide_msoffice() {
    var pomicrosoftoffce = 0;
    var pomicrosoftoffce_cloud = 0;

    $('#msoffice > b > span').text(pomicrosoftoffce);
    $('#msoffice > b > span').attr('cost', pomicrosoftoffce);

    $('#msoffice_cloud > b > span').text(pomicrosoftoffce);
    $('#msoffice_cloud > b > span').attr('cost', pomicrosoftoffce);
    
    $.ajax({
        url: '../json/base.json',
        dataType: 'json',
        success: function(data) {
            $('#msoffice > b > span').text(pomicrosoftoffce);
            $('#msoffice > b > span').attr('cost', pomicrosoftoffce);

            $('#msoffice_cloud > b > span').text(pomicrosoftoffce_cloud);
            $('#msoffice_cloud > b > span').attr('cost', pomicrosoftoffce_cloud);
            
            if(recurring_expenses1() != 0) {
                $('.one_off_cost > span.cost1').text(recurring_expenses1().toFixed(3));
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1().toFixed(3));
            } else {
                $('.one_off_cost > span.cost1').text(recurring_expenses1());
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1());
            }

            if(monthly_costs2() != 0) {
                $('.mounth_costs > span.cost2').text(monthly_costs2().toFixed(3) + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2().toFixed(3));
            } else {
                $('.mounth_costs > span.cost2').text(monthly_costs2() + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2());
            }

            if(defferent_mounth() != 0) {
                $('.difference_cost > span.cost1').text(defferent_mounth().toFixed(3) + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth().toFixed(3));
            } else {
                $('.difference_cost > span.cost1').text(defferent_mounth() + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth());
            }

            $('.term_profitability > .cost2').text(rentability() + ' руб.');
            $('.term_profitability > .cost2').attr(rentability());    
        }
    });
}

function enable_oneclicense() {
    var col_user = $('input[name="col_user"]').val();
    var config = $('input[name="config"]:checked').val();
    
    var col_ownserver = init_col_ownserver(col_user);
    var col_cloud = init_col_cloud(col_user);

    $.ajax({
        url: '../json/base.json',
        dataType: 'json',
        success: function(data) {
            var licenseonec = data.config[0].licenseonec;
            var licenseonec_cloud = data.config[0].licenseonec_cloud;

            var poonec = data.ownserver[0][config][0][col_ownserver][0].poonec;
            var poonec_cloud = data.cloud[0][config][0][col_cloud][0].poonec;

            var result1 = parseFloat(poonec) + (parseFloat(licenseonec) * parseInt(col_user));
            var result2 = parseFloat(poonec_cloud) + (parseFloat(licenseonec_cloud) * parseInt(col_user));

            $('#poonec > b > span').text(result1.toFixed(3));
            $('#poonec > b > span').attr('cost', result1.toFixed(3));

            $('#poonec_cloud > b > span').text(result2.toFixed(3));
            $('#poonec_cloud > b > span').attr('cost', result2.toFixed(3));
            
            if(recurring_expenses1() != 0) {
                $('.one_off_cost > span.cost1').text(recurring_expenses1().toFixed(3));
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1().toFixed(3));
            } else {
                $('.one_off_cost > span.cost1').text(recurring_expenses1());
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1());
            }

            if(monthly_costs2() != 0) {
                $('.mounth_costs > span.cost2').text(monthly_costs2().toFixed(3) + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2().toFixed(3));
            } else {
                $('.mounth_costs > span.cost2').text(monthly_costs2() + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2());
            }

            if(defferent_mounth() != 0) {
                $('.difference_cost > span.cost1').text(defferent_mounth().toFixed(3) + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth().toFixed(3));
            } else {
                $('.difference_cost > span.cost1').text(defferent_mounth() + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth());
            }

            $('.term_profitability > .cost2').text(rentability() + ' руб.');
            $('.term_profitability > .cost2').attr(rentability());            
        }
    });
}

function desable_oneclicense() {
    
     $.ajax({
        url: '../json/base.json',
        dataType: 'json',
        success: function(data) {
            var poonec = /*data.ownserver[0][config][0][col_ownserver][0].poonec*/ 0;
            var poonec_cloud = /*data.cloud[0][config][0][col_cloud][0].poonec*/ 0;

            $('#poonec > b > span').text(poonec);
            $('#poonec > b > span').attr('cost', poonec);

            $('#poonec_cloud > b > span').text(poonec_cloud);
            $('#poonec_cloud > b > span').attr('cost', poonec_cloud);
        
            if(recurring_expenses1() != 0) {
                $('.one_off_cost > span.cost1').text(recurring_expenses1().toFixed(3));
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1().toFixed(3));
            } else {
                $('.one_off_cost > span.cost1').text(recurring_expenses1());
                $('.one_off_cost > span.cost1').attr('cost', recurring_expenses1());
            }

            if(monthly_costs2() != 0) {
                $('.mounth_costs > span.cost2').text(monthly_costs2().toFixed(3) + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2().toFixed(3));
            } else {
                $('.mounth_costs > span.cost2').text(monthly_costs2() + ' руб.');
                $('.mounth_costs > span.cost2').attr('cost', monthly_costs2());
            }

            if(defferent_mounth() != 0) {
                $('.difference_cost > span.cost1').text(defferent_mounth().toFixed(3) + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth().toFixed(3));
            } else {
                $('.difference_cost > span.cost1').text(defferent_mounth() + ' руб.');
                $('.difference_cost > span.cost1').attr('cost', defferent_mounth());
            }

            $('.term_profitability > .cost2').text(rentability() + ' руб.');
            $('.term_profitability > .cost2').attr(rentability());
        }
    });
}

function format_height() {
    var info_device = $('#info_device').height();
    $('#info_cloud').height(info_device);
}