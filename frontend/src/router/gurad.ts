import{isNavigationFailure,Router} from 'vue-router'
import {ACCESS_TOEKN} from '@store/mutation-types'

export function createRouterGuards(router:Router){
    router.beforeEach((to, from, next) =>{
        console.log('start guard')
        
    })
}