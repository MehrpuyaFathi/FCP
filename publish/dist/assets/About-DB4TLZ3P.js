import{D as e,I as t,W as n,b as r,f as i,h as a,l as o,m as s,s as c,u as l,w as u}from"./runtime-core.esm-bundler-B9n6lddj.js";import{n as d,t as f}from"./basecomponent-9qHId2r2.js";var p={name:`Card`,extends:{name:`BaseCard`,extends:f,style:d.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function m(t,n,i,a,s,d){return u(),l(`div`,r({class:t.cx(`root`)},t.ptmi(`root`)),[t.$slots.header?(u(),l(`div`,r({key:0,class:t.cx(`header`)},t.ptm(`header`)),[e(t.$slots,`header`)],16)):o(``,!0),c(`div`,r({class:t.cx(`body`)},t.ptm(`body`)),[t.$slots.title||t.$slots.subtitle?(u(),l(`div`,r({key:0,class:t.cx(`caption`)},t.ptm(`caption`)),[t.$slots.title?(u(),l(`div`,r({key:0,class:t.cx(`title`)},t.ptm(`title`)),[e(t.$slots,`title`)],16)):o(``,!0),t.$slots.subtitle?(u(),l(`div`,r({key:1,class:t.cx(`subtitle`)},t.ptm(`subtitle`)),[e(t.$slots,`subtitle`)],16)):o(``,!0)],16)):o(``,!0),c(`div`,r({class:t.cx(`content`)},t.ptm(`content`)),[e(t.$slots,`content`)],16),t.$slots.footer?(u(),l(`div`,r({key:1,class:t.cx(`footer`)},t.ptm(`footer`)),[e(t.$slots,`footer`)],16)):o(``,!0)],16)],16)}p.render=m;var h={class:`bg-stone-50 py-16 sm:py-24`},g={class:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`},_={class:`mt-24 grid grid-cols-1 md:grid-cols-3 gap-6`},v=a({__name:`About`,setup(e){return(e,r)=>(u(),l(`div`,h,[c(`div`,g,[r[3]||=i(`<div class="text-center mb-20"><h2 class="text-sm font-semibold text-amber-600 tracking-widest uppercase">Our Promise</h2><p class="mt-3 text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl uppercase"> Affordable Luxury, Precious Materials </p><p class="mt-5 max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed"> At Lueur &amp; Or, our philosophy is built on affordable luxury, precious materials, and sustainability. Our jewelry is designed to be elegant, contemporary, and versatile, allowing it to be worn alone or layered for every moment of your life. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"><div class="text-center flex flex-col items-center"><div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6"><i class="pi pi-star text-2xl"></i></div><h3 class="text-lg font-medium text-zinc-900 tracking-wide uppercase">Carefully Selected</h3><p class="mt-3 text-sm text-gray-500 font-light leading-relaxed">We use only high-quality gold, silver, and ethically sourced diamonds to create timeless, sustainable pieces.</p></div><div class="text-center flex flex-col items-center"><div class="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-zinc-700 mb-6"><i class="pi pi-cog text-2xl"></i></div><h3 class="text-lg font-medium text-zinc-900 tracking-wide uppercase">Artisan Craftsmanship</h3><p class="mt-3 text-sm text-gray-500 font-light leading-relaxed">Each piece is meticulously crafted by our skilled artisans, ensuring flawless quality and attention to detail.</p></div><div class="text-center flex flex-col items-center"><div class="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-stone-100 mb-6"><i class="pi pi-box text-2xl"></i></div><h3 class="text-lg font-medium text-zinc-900 tracking-wide uppercase">Premium Packaging</h3><p class="mt-3 text-sm text-gray-500 font-light leading-relaxed">Your jewelry arrives in our signature matte black or cream white packaging, elevating the entire customer experience.</p></div></div>`,2),c(`div`,_,[s(n(p),{class:`shadow-sm border border-stone-200 text-center bg-white rounded-none`},{content:t(()=>[...r[0]||=[c(`h4`,{class:`text-base font-semibold text-zinc-900 mb-2 uppercase tracking-wide`},`Material Mix`,-1),c(`p`,{class:`text-gray-500 text-sm font-light`},`A modern mix of precious materials for a refined, contemporary design.`,-1)]]),_:1}),s(n(p),{class:`shadow-sm border border-stone-200 text-center bg-white rounded-none`},{content:t(()=>[...r[1]||=[c(`h4`,{class:`text-base font-semibold text-zinc-900 mb-2 uppercase tracking-wide`},`Premium Finishes`,-1),c(`p`,{class:`text-gray-500 text-sm font-light`},`High-end finishes ensuring durability and a luxurious feel everyday.`,-1)]]),_:1}),s(n(p),{class:`shadow-sm border border-stone-200 text-center bg-white rounded-none`},{content:t(()=>[...r[2]||=[c(`h4`,{class:`text-base font-semibold text-zinc-900 mb-2 uppercase tracking-wide`},`Refined Packaging`,-1),c(`p`,{class:`text-gray-500 text-sm font-light`},`An unboxing experience that delights, maintaining our premium brand image.`,-1)]]),_:1})])])]))}});export{v as default};