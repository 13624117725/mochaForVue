import Vue from "vue"
import MIndex from "@/components/index.vue"
import { mount } from "vue-test-utils"
describe("index.vue", () => {
    it('点击按钮后, count的值应该为1', () => {
        //获取组件实例
        const Constructor = Vue.extend(MIndex); //组件构造器
        //挂载组件
        const vm = new Constructor().$mount();

        //获取button
        const button = vm.$el.querySelector('button');
        //新建点击事件
        const clickEvent = new window.Event('click');
        //触发点击事件
        button.dispatchEvent(clickEvent);
        //监听点击事件
        vm._watcher.run();
        expect(Number(vm.$el.querySelector('h3').textContent)).to.equal(101)

    })
    it('点击按钮后, count的值应该为1', (done) => {
        //获取组件实例(没有使用vue-test-utils)
        const Constructor = Vue.extend(MIndex); //组件构造器
        //挂载组件
        const vm = new Constructor().$mount();
        //获取button
        const button = vm.$el.querySelector('button');
        //新建点击事件
        const clickEvent = new window.Event('click');
        //触发点击事件
        button.dispatchEvent(clickEvent);
        //监听点击事件
        vm._watcher.run();
        window.setTimeout(() => {
            // 断言
            expect(Number(vm.$el.querySelector('h3').textContent)).to.equal(101);
            done()
        }, 1000)


    })
})