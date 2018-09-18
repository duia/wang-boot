/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 1.9.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.9/admin/
*/

var handleCalendarDemo = function () {
	"use strict";
	var buttonSetting = {left: 'today prev,next ', center: 'title', right: 'month,agendaWeek,agendaDay'};
	var date = new Date();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	var calendar = $('#calendar').fullCalendar({
		theme: true,
		header: buttonSetting,
		monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		today: ["今天"],
		//firstDay: 1,
		buttonText: {
		    today: '本月',
		    month: '月',
		    week: '周',
		    day: '日',
		    prev: '上一月',
		    next: '下一月'
		},
		selectable: true,
		selectHelper: true,
		droppable: true,
		drop: function(date, allDay) { // this function is called when something is dropped
		
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $(this).data('eventObject');
			
			// we need to copy it, so that multiple events don't have a reference to the same object
			var copiedEventObject = $.extend({}, originalEventObject);
			
			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;
			
			// render the event on the calendar
			// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
			
			// is the "remove after drop" checkbox checked?
			if ($('#drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}
			
		},
		select: function(start, end, allDay) {
			var title = prompt('Event Title:');
			if (title) {
				calendar.fullCalendar('renderEvent',
					{
						title: title,
						start: start,
						end: end,
						allDay: allDay
					},
					true // make the event "stick"
				);
			}
			calendar.fullCalendar('unselect');
		},
		eventRender: function(event, element, calEvent) {
				var mediaObject = (event.media) ? event.media : '';
				var description = (event.description) ? event.description : '';
            element.find(".fc-event-title").after($("<span class=\"fc-event-icons\"></span>").html(mediaObject));
            element.find(".fc-event-title").append('<small>'+ description +'</small>');
        },
		editable: true,
		events: [
			{
				title: 'Event',
				start: new Date(y, m, 0),
				end: new Date(y, m, 1),
				className: 'bg-purple',
				media: '<i class="fa fa-trophy"></i>',
				description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
			},
			{
				title: 'Daily Meeting',
				start: new Date(y, m, 10),
				end: new Date(y, m, 12),
				allDay: false,
				className: 'bg-blue',
				media: '<i class="fa fa-users"></i>',
				description: 'Lorem ipsum dolor sit amet adipiscing elit.'
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 15),
				end: new Date(y, m, 17),
				url: 'http://google.com/',
				className: 'bg-green',
				media: '<i class="fa fa-google-plus"></i>',
				description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
			}
		]
	});
	
	/* initialize the external events
	-----------------------------------------------------------------*/
	$('#external-events .external-event').each(function() {
		var eventObject = {
			title: $.trim($(this).attr('data-title')),
			className: $(this).attr('data-bg'),
			media: $(this).attr('data-media'),
			description: $(this).attr('data-desc')
		};
		
		$(this).data('eventObject', eventObject);
		
		$(this).draggable({
			zIndex: 999,
			revert: true,
			revertDuration: 0
		});
	});
};


var Calendar = function () {
	"use strict";
    return {
        //main function
        init: function () {
            $.getScript('/static/plugins/fullcalendar/fullcalendar.js').done(function() {
                handleCalendarDemo();
            });
        }
    };
}();