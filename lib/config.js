"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewTypes = require("./ViewTypes");

var _ViewTypes2 = _interopRequireDefault(_ViewTypes);

var _SummaryPos = require("./SummaryPos");

var _SummaryPos2 = _interopRequireDefault(_SummaryPos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  schedulerWidth: "100%",
  besidesWidth: 20,
  schedulerMaxHeight: 0,
  tableHeaderHeight: 40,

  agendaResourceTableWidth: 160,
  agendaMaxEventWidth: 100,

  dayResourceTableWidth: 160,
  weekResourceTableWidth: "16%",
  monthResourceTableWidth: 160,
  quarterResourceTableWidth: 160,
  yearResourceTableWidth: 160,
  customResourceTableWidth: 160,

  dayCellWidth: 30,
  weekCellWidth: "12%",
  monthCellWidth: 80,
  quarterCellWidth: 80,
  yearCellWidth: 80,
  customCellWidth: 80,

  dayMaxEvents: 99,
  weekMaxEvents: 99,
  monthMaxEvents: 99,
  quarterMaxEvents: 99,
  yearMaxEvents: 99,
  customMaxEvents: 99,

  eventItemHeight: 22,
  eventItemLineHeight: 24,
  nonAgendaSlotMinHeight: 0,
  dayStartFrom: 0,
  dayStopTo: 23,
  defaultEventBgColor: "#80C5F6",
  selectedAreaColor: "#7EC2F3",
  nonWorkingTimeHeadColor: "#999999",
  nonWorkingTimeHeadBgColor: "rgba(106, 27, 154, 0.1)",
  nonWorkingTimeBodyBgColor: "rgba(106, 27, 154, 0.1)",
  summaryColor: "#666",
  summaryPos: _SummaryPos2.default.TopRight,
  groupOnlySlotColor: "#F8F8F8",

  startResizable: true,
  endResizable: true,
  movable: true,
  creatable: true,
  crossResourceMove: true,
  checkConflict: false,
  scrollToSpecialMomentEnabled: true,
  eventItemPopoverEnabled: true,
  calendarPopoverEnabled: true,
  recurringEventsEnabled: true,
  headerEnabled: true,
  displayWeekend: true,
  relativeMove: true,
  defaultExpanded: true,

  resourceName: "Tipologia",
  taskName: "Nome da Tarefa",
  agendaViewHeader: "Agenda",
  addMorePopoverHeaderFormat: "MMM D, YYYY dddd",
  eventItemPopoverDateFormat: "D MMM YYYY",
  nonAgendaDayCellHeaderFormat: "HH:mm",
  nonAgendaOtherCellHeaderFormat: "ddd D/M",

  minuteStep: 30,

  views: [{
    viewName: "Dia",
    viewType: _ViewTypes2.default.Day,
    showAgenda: false,
    isEventPerspective: false
  }, {
    viewName: "Semana",
    viewType: _ViewTypes2.default.Week,
    showAgenda: false,
    isEventPerspective: false
  }, {
    viewName: "Mês",
    viewType: _ViewTypes2.default.Month,
    showAgenda: false,
    isEventPerspective: false
  }]
};