<template>
  <div class="app">
    <div class="content">
      <el-button @click="toggle">切换主题</el-button>
      <button-example />
      <input-example />
      <checkbox-example />
      <card-example />
      <dropdown-example />
      <link-example />
      <alert-example />
      <autocomplete-example />
      <avatar-example />
      <backtop-example />
      <badge-example />
      <breadcrumb-example />

      <calendar-example />
      <card-example />
      <carousel-example />
      <cascader-example />
      <checkbox-example />
      <collapse-example />
      <color-picker-example />
      <date-picker-example />
      <descriptions-example />
      <dialog-example />
      <divider-example />
      <drawer-example />
      <dropdown-example />
      <empty-example />
      <form-example />
      <image-example />
      <input-number-example />
      <input-example />
      <link-example />
      <loading-example />
      <menu-example />
      <message-box-example />
      <message-example />
      <notification-example />
      <pageHeader-example />
      <pagination-example />
      <popconfirm-example />
      <popover-example />
      <progress-example />
      <radio-example />
      <rate-example />
      <result-example />
      <scrollbar-example />
      <select-example />
      <skeleton-example />
      <slider-example />
      <statistic-example />
      <steps-example />
      <switch-example />
      <table-example />
      <tabs-example />
      <tag-example />
      <time-picker-example />
      <timeline-example />
      <tooltip-example />
      <transfer-example />
      <tree-example />
      <upload-example />
    </div>
  </div>
</template>

<script>
import AlertExample from './examples/Alert.vue';
import AutocompleteExample from './examples/Autocomplete.vue';
import AvatarExample from './examples/Avatar.vue';
import BacktopExample from './examples/Backtop.vue';
import BadgeExample from './examples/Badge.vue';
import BreadcrumbExample from './examples/Breadcrumb.vue';
import ButtonExample from './examples/Button.vue';
import CalendarExample from './examples/Calendar.vue';
import CardExample from './examples/Card.vue';
import CarouselExample from './examples/Carousel.vue';
import CascaderExample from './examples/Cascader.vue';
import CheckboxExample from './examples/Checkbox.vue';
import CollapseExample from './examples/Collapse.vue';
import ColorPickerExample from './examples/ColorPicker.vue';
import DatePickerExample from './examples/DatePicker.vue';
import DescriptionsExample from './examples/Descriptions.vue';
import DialogExample from './examples/Dialog.vue';
import DividerExample from './examples/Divider.vue';
import DrawerExample from './examples/Drawer.vue';
import DropdownExample from './examples/Dropdown.vue';
import EmptyExample from './examples/Empty.vue';
import FormExample from './examples/Form.vue';
import ImageExample from './examples/Image.vue';
import InputNumberExample from './examples/InputNumber.vue';
import InputExample from './examples/Input.vue';
import LinkExample from './examples/Link.vue';
import LoadingExample from './examples/Loading.vue';
import MenuExample from './examples/Menu.vue';
import MessageBoxExample from './examples/MessageBox.vue';
import MessageExample from './examples/Message.vue';
import NotificationExample from './examples/Notification.vue';
import PageHeaderExample from './examples/PageHeader.vue';
import PaginationExample from './examples/Pagination.vue';
import PopconfirmExample from './examples/Popconfirm.vue';
import PopoverExample from './examples/Popover.vue';
import ProgressExample from './examples/Progress.vue';
import RadioExample from './examples/Radio.vue';
import RateExample from './examples/Rate.vue';
import ResultExample from './examples/Result.vue';
import ScrollbarExample from './examples/Scrollbar.vue';
import SelectExample from './examples/Select.vue';
import SkeletonExample from './examples/Skeleton.vue';
import SliderExample from './examples/Slider.vue';
import StatisticExample from './examples/Statistic.vue';
import StepsExample from './examples/Steps.vue';
import SwitchExample from './examples/Switch.vue';
import TableExample from './examples/Table.vue';
import TabsExample from './examples/Tabs.vue';
import TagExample from './examples/Tag.vue';
import TimePickerExample from './examples/TimePicker.vue';
import TimelineExample from './examples/Timeline.vue';
import TooltipExample from './examples/Tooltip.vue';
import TransferExample from './examples/Transfer.vue';
import TreeExample from './examples/Tree.vue';
import UploadExample from './examples/Upload.vue';

export default {
  name: 'App',
  components: {
    AlertExample,
    AutocompleteExample,
    AvatarExample,
    BacktopExample,
    BadgeExample,
    BreadcrumbExample,
    ButtonExample,
    CalendarExample,
    CardExample,
    CarouselExample,
    CascaderExample,
    CheckboxExample,
    CollapseExample,
    ColorPickerExample,
    DatePickerExample,
    DescriptionsExample,
    DialogExample,
    DividerExample,
    DrawerExample,
    DropdownExample,
    EmptyExample,
    FormExample,
    ImageExample,
    InputNumberExample,
    InputExample,
    LinkExample,
    LoadingExample,
    MenuExample,
    MessageBoxExample,
    MessageExample,
    NotificationExample,
    PageHeaderExample,
    PaginationExample,
    PopconfirmExample,
    PopoverExample,
    ProgressExample,
    RadioExample,
    RateExample,
    ResultExample,
    ScrollbarExample,
    SelectExample,
    SkeletonExample,
    SliderExample,
    StatisticExample,
    StepsExample,
    SwitchExample,
    TableExample,
    TabsExample,
    TagExample,
    TimePickerExample,
    TimelineExample,
    TooltipExample,
    TransferExample,
    TreeExample,
    UploadExample,
  },
  methods: {
    toggle() {
      // html
      document.body.classList.toggle('dark');
    },
  },
};
</script>
