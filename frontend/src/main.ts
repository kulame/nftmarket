import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router, {setupRouter} from './router'


import {
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCol,
    ElCollapse,
    ElCollapseItem,
    ElCollapseTransition,
    ElColorPicker,
    ElContainer,
    ElDatePicker,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElRate,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElTag,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
  } from 'element-plus';



(async() => {
    console.log("start main ts");
    const app = createApp(App)
    app.use(ElementPlus)
    setupRouter(app);
    app.mount('#app');
    console.log("end main ts");
})()
