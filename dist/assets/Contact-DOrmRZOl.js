import{B as e,W as t,b as n,f as r,h as i,m as a,s as o,u as s,w as c}from"./runtime-core.esm-bundler-B9n6lddj.js";import{a as l,d as u,t as d}from"./button-CY5sYZjG.js";import{n as f}from"./basecomponent-9qHId2r2.js";import{i as p,n as m,r as h}from"./index-DXlj8vdf.js";var g=f.extend({name:`textarea`,style:`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-textarea p-component`,{"p-filled":t.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size===`small`,"p-textarea-lg p-inputfield-lg":n.size===`large`,"p-invalid":t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-textarea-fluid":t.$fluid}]}}}),_={name:`BaseTextarea`,extends:h,props:{autoResize:Boolean},style:g,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},v(e)}function y(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=x(e,`string`);return v(t)==`symbol`?t:t+``}function x(e,t){if(v(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(v(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var S={name:`Textarea`,extends:_,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,t=parseInt(e)||0,n=this.$el.scrollHeight;t&&n<t?(this.$el.style.height=`auto`,this.$el.style.height=`${this.$el.scrollHeight}px`):(!t||n>t)&&(this.$el.style.height=`${n}px`)}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return n(this.ptmi(`root`,{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return l(y({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant===`filled`},this.size,this.size))}}},C=[`value`,`name`,`disabled`,`aria-invalid`,`data-p`];function w(e,t,r,i,a,o){return c(),s(`textarea`,n({class:e.cx(`root`),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":o.dataP,onInput:t[0]||=function(){return o.onInput&&o.onInput.apply(o,arguments)}},o.attrs),null,16,C)}S.render=w;var T={class:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24`},E={class:`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 shadow-sm border border-stone-200`},D={class:`flex flex-col gap-2`},O={class:`flex flex-col gap-2`},k={class:`flex flex-col gap-2`},A=i({__name:`Contact`,setup(n){let i=p(),l=e({name:``,email:``,message:``}),f=async()=>{try{let e=await fetch(`/api/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(l.value)});if(e.ok){let t=await e.json();i.add({severity:`success`,summary:`Success`,detail:t.message,life:3e3}),l.value={name:``,email:``,message:``}}else i.add({severity:`error`,summary:`Error`,detail:`Failed to send message. Please try again later.`,life:3e3})}catch(e){console.error(`Error submitting form:`,e),i.add({severity:`error`,summary:`Error`,detail:`An error occurred. Please check your connection.`,life:3e3})}};return(e,n)=>(c(),s(`div`,T,[n[4]||=o(`div`,{class:`text-center mb-16`},[o(`h2`,{class:`text-3xl font-light text-zinc-900 tracking-tight uppercase`},`Customer Service`),o(`p`,{class:`mt-4 max-w-2xl mx-auto text-xl text-gray-500`},` We are here to assist you with any questions or inquiries. `)],-1),o(`div`,E,[n[3]||=r(`<div class="flex flex-col justify-center"><h3 class="text-xl font-light text-zinc-900 mb-8 uppercase tracking-widest border-b border-stone-200 pb-4">Contact Details</h3><div class="flex items-center mb-6 text-gray-700"><i class="pi pi-envelope text-amber-500 text-xl mr-4"></i><span class="font-light tracking-wide">contact@eclatdor.com</span></div><div class="flex items-center mb-8 text-gray-700"><i class="pi pi-phone text-amber-500 text-xl mr-4"></i><span class="font-light tracking-wide">+1 (555) 123-4567</span></div><p class="text-sm text-gray-500 leading-relaxed font-light"> Our customer service team is available Monday through Friday, 9:00 AM to 6:00 PM. We aim to respond to all inquiries within 24 hours. </p></div>`,1),o(`form`,{onSubmit:u(f,[`prevent`]),class:`flex flex-col gap-6`},[o(`div`,D,[a(t(m),{id:`name`,modelValue:l.value.name,"onUpdate:modelValue":n[0]||=e=>l.value.name=e,placeholder:`Your Name`,required:``,class:`p-3 bg-stone-50 border border-stone-200 text-sm font-light focus:border-amber-500 focus:ring-0`},null,8,[`modelValue`])]),o(`div`,O,[a(t(m),{id:`email`,type:`email`,modelValue:l.value.email,"onUpdate:modelValue":n[1]||=e=>l.value.email=e,placeholder:`Email Address`,required:``,class:`p-3 bg-stone-50 border border-stone-200 text-sm font-light focus:border-amber-500 focus:ring-0`},null,8,[`modelValue`])]),o(`div`,k,[a(t(S),{id:`message`,modelValue:l.value.message,"onUpdate:modelValue":n[2]||=e=>l.value.message=e,rows:`5`,placeholder:`Your Message`,required:``,class:`p-3 bg-stone-50 border border-stone-200 text-sm font-light resize-none focus:border-amber-500 focus:ring-0`},null,8,[`modelValue`])]),a(t(d),{type:`submit`,label:`Send Message`,class:`w-full bg-zinc-900 text-white border-none hover:bg-zinc-800 py-3 mt-2 uppercase tracking-widest text-sm`})],32)])]))}});export{A as default};