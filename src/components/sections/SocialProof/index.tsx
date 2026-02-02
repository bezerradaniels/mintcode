// SectionSocialProof.tsx

const PORTRAIT_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='520'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='35%25' r='80%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='100%25' stop-color='%23d9d9d9'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Cpath d='M260 285c72 0 110 42 128 92 8 23-8 43-33 43H165c-25 0-41-20-33-43 18-50 56-92 128-92Z' fill='%23cfcfcf'/%3E%3Ccircle cx='260' cy='210' r='78' fill='%23cfcfcf'/%3E%3C/svg%3E";

export default function SectionSocialProof() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Bottom gradient band with vertical fade to white */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px]"
        style={{
          background: 'linear-gradient(to right, #BCF8C4 0%, #B2F5FA 50%, #9FBDFF 100%)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-14 sm:pt-12 sm:pb-16">
        {/* Eyebrow */}
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.18em] text-neutral-500">
            WHAT OUR CUSTOMERS SAY
          </p>
        </div>

        {/* Main headline */}
        <div className="mt-6 text-center">
          <h2 className="text-[44px] leading-[1.08] font-medium text-neutral-900 sm:text-[52px]">
            The smart money is
            <br />
            on QuickBooks
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-col items-center gap-6 sm:mt-12 lg:flex-row lg:justify-center lg:gap-7">
          {/* Left dark card */}
          <div className="w-full max-w-[360px] rounded-2xl bg-[#00254A] px-7 py-7 text-[16px] leading-[1.45] text-white/85 sm:max-w-[320px] lg:h-[230px] lg:w-[320px]">
            <p>
              74% of customers
              <br />
              say Intuit Assist gives
              <br />
              them a better view of
              <br />
              their business&apos;s
              <br />
              financial health.<sup className="text-[11px] align-super">5</sup>
            </p>
          </div>

          {/* Right light cyan card */}
          <div className="w-full max-w-[760px] overflow-hidden rounded-2xl bg-[#C1F6FF] lg:h-[230px] lg:w-[760px]">
            <div className="flex h-full">
              {/* Text side */}
              <div className="flex min-w-0 flex-1 flex-col justify-between px-7 py-7">
                <p className="text-[16px] leading-normal text-neutral-900">
                  &ldquo;Forecasting has been really
                  <br />
                  helpful. It&apos;ll show me trends&ndash;
                  <br />
                  last quarter&apos;s or last year&apos;s
                  <br />
                  sales. Just being able to see
                  <br />
                  the graphs and the charts has
                  <br />
                  been really helpful.&rdquo;
                </p>

                <div className="mt-5">
                  <p className="text-[12px] font-semibold text-neutral-900">
                    Laura Adekoya
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    Owner of Fleurs et Sel
                  </p>
                </div>
              </div>

              {/* Portrait side */}
              <div className="relative hidden w-[250px] shrink-0 lg:block">
                <img
                  src={PORTRAIT_SRC}
                  alt="Portrait"
                  className="absolute bottom-0 right-0 h-[240px] w-[240px] object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust headline */}
        <div className="mt-16 text-center sm:mt-20">
          <h3 className="text-[34px] leading-[1.18] font-medium text-neutral-900 sm:text-[40px]">
            Trusted by millions of businesses
            <br />
            worldwide
          </h3>

          {/* CTA */}
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-[#48BA5C] px-4 py-2 text-[12px] font-semibold text-neutral-900"
            >
              See plans &amp; pricing
            </button>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center">
          <p className="text-[11px] text-neutral-600">
            Important pricing details and product information
          </p>
        </div>
      </div>
    </section>
  );
}
