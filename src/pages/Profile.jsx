import './Profile.css'

export default function Profile() {
  return (
    <main className="profile">
      <div className="profile__photo">
        <img src="/images/profile.jpg" alt="Retrato" />
      </div>

      <div className="profile__content">
        <header className="profile__header">
          <p>Untitled (lucas)</p>
          <p>
            <a href="mailto:lucaswork.contato@gmail.com">lucaswork.contato@gmail.com</a>
          </p>
          <p>
            <a href="https://instagram.com/jamaicarider" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
        </header>

        <p className="profile__bio">
          Creative Developer and Product Designer blending engineering, design, and business strategy to build high-impact digital experiences.
        </p>

        <section className="profile__lists">
          <div className="profile__list">
            <h2>Individual Projects</h2>

            <div className="profile__entry">
              <p className="profile__entry-title profile__entry-title--upcoming">
                (come soon) Champion Horse
              </p>
              <p>
                Clothing brand with complete brand identity, e-commerce website, and original illustrations. Western-inspired streetwear aesthetic.

                Complete brand creation from concept to execution
                E-commerce website development and design
                Original illustration and graphic design
                Western-inspired streetwear aesthetic direction
              </p>
              <p>Curitiba, BRA</p>
              <p>2026</p>
            </div>

            <div className="profile__entry">
              <p className="profile__entry-title">Nabō Agency</p>
              <p>Act as the lead Designer for NABŌ, developing creative solutions for a diverse portfolio of premium clients in the lifestyle, wellness, gastronomy, and hospitality sectors.
                 Key Clients: Basement Academia Mela Gelateria Casa Kio S.A.L Destilaria Céu Bar
              </p>
              <p>Curitiba, BRA</p>
              <p>Present</p>
              
            </div>


            <div className="profile__entry">
              <p className="profile__entry-title">TRAMA BR </p>
              <p>Creative Director / Product

              Led creative direction for product and packaging development
              Built strategic visual identity aligned with product positioning
              Directed concept through execution with multidisciplinary team</p>
              <p>2025</p>
            </div>

            <div className="profile__entry">
              <p className="profile__entry-title">Designer at Beatnik Sons</p>
              <p>Worked as a Designer for Beatnik Sons, closely attached to the Toro Raincoats brand.
                 My responsibilities included end-to-end creative development, from product design simulations for bags and backpacks to institutional materials. I also managed marketing assets, using Klaviyo for email campaigns and creating visuals for the website.</p>
              <p>2022 – 2023</p>
            </div>
          </div>

          <div className="profile__list">
            <h2>Collective Projects</h2>

            <div className="profile__entry">
              <p className="profile__entry-title">JOVEM DIONISIO DISCO</p>
              <p>Designer

                Created visual for the band's debut LP
                Developed artistic Collaborated with multidisciplinary creative team</p>
              <p>2024</p>
            </div>

            <div className="profile__entry">
              <p className="profile__entry-title">WPN Agency</p>
              <p>Junior Art Director

              Worked with global brands including Ben & Jerry's and Gelartier
              Created monthly campaigns and digital assets
              Strategic participation in meetings and performance analysis</p>
              <p>2022 SP - BRA</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
