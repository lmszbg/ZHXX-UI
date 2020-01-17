## 使用方法

<switch-patient :cardinfo="cardinfo" :isShowTip="true" :nowIndex="0" :defaultId="0"></switch-patient>

import switchPatient from '@/components/switch-patient/switch-patient.vue'
export default{
	components: {
		switchPatient,
	},
}

##参数说明
cardinfo //就诊人数组
isShowTip //是否显示默认标签
nowIndex //当前显示的就诊人index
defaultId //默认就诊人的index