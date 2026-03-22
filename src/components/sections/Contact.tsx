import { SectionTitle } from './About'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle label="04" title="Contact" />
            <p className="text-lg text-text-muted mt-4 leading-relaxed">
              새로운 기회에 열려 있습니다.<br />편하게 연락 주세요.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* TODO: GitHub URL 추가 후 href 교체 */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-border rounded-2xl px-6 py-5 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 bg-[#f0f0f0] rounded-xl flex items-center justify-center text-xl font-bold text-[#333]">
                G
              </div>
              <div>
                <p className="font-semibold text-text-heading group-hover:text-primary transition-colors">GitHub</p>
                <p className="text-sm text-text-muted">github.com/신병우</p>{/* TODO: 실제 GitHub 주소로 교체 */}
              </div>
              <span className="ml-auto text-text-muted group-hover:text-primary transition-colors">→</span>
            </a>

            <a
              href="mailto:shin.byoungwoo@gmail.com"
              className="flex items-center gap-4 bg-white border border-border rounded-2xl px-6 py-5 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 bg-[#eef0ff] rounded-xl flex items-center justify-center text-xl">
                ✉
              </div>
              <div>
                <p className="font-semibold text-text-heading group-hover:text-primary transition-colors">Email</p>
                <p className="text-sm text-text-muted">shin.byoungwoo@gmail.com</p>
              </div>
              <span className="ml-auto text-text-muted group-hover:text-primary transition-colors">→</span>
            </a>

            <div className="flex items-center gap-4 bg-white border border-border rounded-2xl px-6 py-5">
              <div className="w-11 h-11 bg-[#f0fff4] rounded-xl flex items-center justify-center text-xl">
                📱
              </div>
              <div>
                <p className="font-semibold text-text-heading">Phone</p>
                <p className="text-sm text-text-muted">010-4901-2582</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
