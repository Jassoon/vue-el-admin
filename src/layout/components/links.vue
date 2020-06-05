<template>
    <div v-bind="linkFormat(to)">
        <slot></slot>
    </div>
</template>
<script>
import { isExternal } from '@/utils'
export default {
    props:{
        to:String,
        required: true
    },
    data(){
        return{}
    },
    computed:{

    },
    methods:{
        isExternalLink(routePath) {
            return isExternal(routePath)
        },
        linkFormat(url) {
            if (this.isExternalLink(url)) {
                return {
                is: 'a',
                href: url,
                target: '_blank',
                rel: 'noopener'
                }
            }
            return {
                is: 'router-link',
                to: url
            }
        }
    }  
}
</script>