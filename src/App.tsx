import type { ReactNode } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const destinations = [
  { number: '01', label: 'SOCIAL', name: 'Social', path: '/social', symbol: '↗' },
  { number: '02', label: 'CODE', name: 'GitHub', path: '/git', symbol: '⌘' },
  { number: '03', label: 'LISTEN', name: 'Music space', path: '/music', symbol: '♫' },
  { number: '04', label: 'CONTACT', name: 'Connect', path: '/connect', symbol: '↗' },
]

function Header() {
  return (
    <header className="topbar">
      <Link className="logo" to="/" aria-label="Về trang chủ">
        Lerris<span></span>
      </Link>
      <div className="topbar-note">
        <span className="status-dot" />
        PERSONAL PORTFOLIO
      </div>
      <Link className="topbar-index" to="/connect">
        LET'S CONNECT <span>↗</span>
      </Link>
    </header>
  )
}
function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 HUNGLER — MADE WITH CURIOSITY</span>
    </footer>
  )
}
function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            PERSONAL PORTFOLIO — 2026
          </div>

          <h1>
            Xin chào,
            <br />
            mình là <span className="name-highlight">Hung</span>
          </h1>

          <div className="role-line">
            <span className="role-marker">✳</span>
            <span>WEB DEVELOPER IN THE MAKING</span>
          </div>

          <p className="hero-description">
            Mình biến những ý tưởng thú vị thành trải nghiệm số
            sáng tạo — từng dòng code, từng chi tiết nhỏ.
          </p>

          <a className="discover-link" href="#explore">
            <span className="discover-icon">↓</span>
            <span>KHÁM PHÁ THẾ GIỚI CỦA MÌNH</span>
          </a>
        </div>

        <div className="hero-visual" aria-label="Hình minh họa quỹ đạo trừu tượng">
          <div className="visual-label visual-label-top">
            <span>FIG. 001</span>
            <span>CREATIVE MIND</span>
          </div>

          <div className="orbit orbit-outer" />
          <div className="orbit orbit-middle" />
          <div className="orbit orbit-inner" />

          <div className="orbit-core"><span>LeR</span></div>
          <div className="orbit-node node-one" />
          <div className="orbit-node node-two" />
          <div className="orbit-node node-three" />
          <div className="visual-cross cross-one">+</div>
          <div className="visual-cross cross-two">+</div>

          <div className="floating-note note-one">
            <span className="note-dot" /> DESIGN
          </div>
          <div className="floating-note note-two">CODE <span>↗</span></div>

          <div className="visual-label visual-label-bottom">
            <span>IDEAS INTO REALITY</span>
            <span>EST. 2026</span>
          </div>
        </div>
      </section>

      <section className="connect-section" id="explore">
        <div className="connect-heading">
          <span className="section-label">EXPLORE MY WORLD</span>
          <span className="section-caption">CHOOSE A DESTINATION ↘</span>
        </div>

        <nav className="link-grid" aria-label="Các trang portfolio">
          {destinations.map((item) => (
            <Link className="link-card" to={item.path} key={item.path}>
              <div className="card-top">
                <span className="card-number">{item.number}</span>
                <span className="card-symbol">{item.symbol}</span>
              </div>
              <div className="card-bottom">
                <div>
                  <span className="card-label">{item.label}</span>
                  <span className="card-name">{item.name}</span>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </Link>
          ))}
        </nav>
      </section>
    </>
  )
}
function SubPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  children?: ReactNode
}) {
  return (
    <section className="subpage">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </div>
      <h1>{title}</h1>
      <p className="subpage-description">{description}</p>
      <div className="subpage-content">{children}</div>
      <Link className="back-link" to="/">
        <span>←</span> QUAY VỀ TRANG CHỦ
      </Link>
    </section>
  )
}

function SocialPage() {
  return (
    <SubPage
      eyebrow="SOCIAL"
      title={<>Một chút về <span className="name-highlight">mình.</span></>}
      description="Những nơi bạn có thể theo dõi hành trình và các hoạt động sáng tạo của mình."
    >
      <a className="detail-row" href="https://www.instagram.com/hwg.ler/" target="_blank" rel="noreferrer">
        <span>Instagram</span><span>Ảnh và cuộc sống ↗</span>
      </a>
      <a className="detail-row" href="https://www.tiktok.com/@hungler.161" target="_blank" rel="noreferrer">
        <span>TikTok</span><span>Video sáng tạo ↗</span>
      </a>
      <a className="detail-row" href="https://www.facebook.com/hungler.161/" target="_blank" rel="noreferrer">
        <span>Facebook</span><span>Chia sẻ cuộc sống ↗</span>
      </a>
    </SubPage>
  )
}

function GitPage() {
  return (
    <SubPage
      eyebrow="DEVELOPMENT"
      title={<>Built with <span className="name-highlight">curiosity.</span></>}
      description="Nơi mình lưu trữ dự án, thử nghiệm ý tưởng và phát triển kỹ năng lập trình."
    >
      <a className="detail-row" href="https://github.com/" target="_blank" rel="noreferrer">
        <span>GitHub</span><span>Khám phá repository ↗</span>
      </a>
      <div className="detail-row">
        <span>Tech stack</span><span>React · TypeScript · CSS</span>
      </div>
      <div className="detail-row">
        <span>Hiện tại</span><span>Building my portfolio</span>
      </div>
    </SubPage>
  )
}

function MusicPage() {
  return (
    <SubPage
      eyebrow="MUSIC"
      title={<>Sound is a <span className="name-highlight">feeling.</span></>}
      description="Một góc dành cho âm nhạc, những bản beat và hành trình khám phá âm thanh."
    >
      <a className="detail-row" href="https://soundcloud.com/" target="_blank" rel="noreferrer">
        <span>SoundCloud</span><span>Nghe nhạc ↗</span>
      </a>
      <div className="detail-row">
        <span>Interests</span><span>Hip-hop · Trap · Drill</span>
      </div>
      <div className="detail-row">
        <span>Studio</span><span>FL Studio</span>
      </div>
    </SubPage>
  )
}

function ConnectPage() {
  return (
    <SubPage
      eyebrow="CONTACT"
      title={<>Let's make something <span className="name-highlight">great.</span></>}
      description="Bạn có ý tưởng, dự án hoặc muốn trao đổi về công nghệ và sáng tạo? Hãy kết nối với mình."
    >
      <a className="detail-row" href="mailto:hungler161@gmail.com">
        <span>Email</span><span>hungler161@gmail.com</span>
      </a>
      <a className="detail-row" href="https://github.com/" target="_blank" rel="noreferrer">
        <span>GitHub</span><span>Kết nối trên GitHub ↗</span>
      </a>
    </SubPage>
  )
}

function NotFoundPage() {
  return (
    <SubPage
      eyebrow="404 / NOT FOUND"
      title={<>Lost in <span className="name-highlight">space?</span></>}
      description="Trang bạn tìm không tồn tại hoặc đường dẫn đã thay đổi."
    >
     
    </SubPage>
  )
}

function App() {
  const location = useLocation()

  return (
    <main className="portfolio" key={location.pathname}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/git" element={<GitPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  )
}
export default App
