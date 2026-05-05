type Project = {
  name: string;
  label: string;
  description: string;
  details: string[];
  logo?: string;
  images: string[];
  videos: string[];
  portraitVideo?: boolean;
  site?: string;
  siteStatus?: string;
};

const getProjectVisualsId = (projectName: string) =>
  `${projectName.toLowerCase().replace(/[^a-z0-9]+/g, "")}visuals`;

const projects: Project[] = [
  {
    name: "Eventa",
    label: "iOS app",
    description: "An app that helps moms plan Bar Mitzvahs.",
    details: ["Event planning product", "Built for mobile", "Ready for product screenshots"],
    logo: "/logos/eventa-logo.png",
    images: [
      "/projects/eventa/eventa-pics.webp",
      "/projects/eventa/eventa-pics2.webp",
      "/projects/eventa/eventa-pics3.webp",
      "/projects/eventa/eventa-4.webp",
      "/projects/eventa/eventa-5.webp",
      "/projects/eventa/eventa-6.webp",
      "/projects/eventa/eventa-7.png",
      "/projects/eventa/eventa-8.webp",
      "/projects/eventa/eventa-9.webp",
      "/projects/eventa/eventa-10.png",
      "/projects/eventa/eventa-11.webp",
    ],
    videos: [],
    siteStatus: "Product visuals",
  },
  {
    name: "Sarmie Sales",
    label: "Ecommerce website",
    description:
      "Built a cleat store for a friend in exchange for FieldVision giveaway inventory.",
    details: ["8,000 plus customers", "About 50 pro customers", "Live business website"],
    logo: "/logos/sarmiesales-logo.png",
    images: [
      "/projects/sarmiesales/Screenshot 2026-05-04 at 10.37.52 PM.png",
      "/projects/sarmiesales/Screenshot 2026-05-04 at 10.37.59 PM.png",
      "/projects/sarmiesales/Screenshot 2026-05-04 at 10.38.11 PM.png",
      "/projects/sarmiesales/Screenshot 2026-05-04 at 10.38.25 PM.png",
      "/projects/sarmiesales/Screenshot 2026-05-04 at 10.38.33 PM.png",
    ],
    videos: [],
    siteStatus: "Product visuals",
  },
  {
    name: "Delt App",
    label: "Class project",
    description: "A Duolingo style poker learning web app.",
    details: ["Interactive lessons", "Poker practice flow", "Built as a web app"],
    images: [],
    videos: ["/projects/delt/delt-demo.mov"],
    portraitVideo: true,
    site: "https://deltpoker.vercel.app/",
  },
  {
    name: "SAYF App",
    label: "iOS app",
    description:
      "Built an app for a startup where people book movers and storage units in one place.",
    details: ["Marketplace flow", "Product photos available", "Videos available"],
    logo: "/logos/SAYF-logo.png",
    images: [
      "/projects/sayf/PHOTO-2026-04-28-13-17-33.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-17-33 2.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-17-33 3.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-17-34.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-17-34 2.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-17-34 3.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-17-34 4.jpg",
      "/projects/sayf/PHOTO-2026-04-28-13-35-14.jpg",
    ],
    videos: [],
    siteStatus: "App visuals",
  },
  {
    name: "Feet2Fortunes",
    label: "Paid client site",
    description: "Built a paid creator website for feet2fortunes.com.",
    details: ["Paid $1,200 project", "Creator commerce site", "Client delivery"],
    logo: "/logos/feet2fortunes-logo.png",
    images: [
      "/projects/feet2fortunes/Screenshot 2026-05-04 at 10.28.01 PM.png",
      "/projects/feet2fortunes/Screenshot 2026-05-04 at 10.28.21 PM.png",
      "/projects/feet2fortunes/Screenshot 2026-05-04 at 10.29.44 PM.png",
    ],
    videos: [],
    site: "https://feet2fortunes.com",
  },
  {
    name: "Araknid Institute",
    label: "Tournament website",
    description:
      "Built a site to manage a 6v6 soccer tournament for a private training company.",
    details: ["About 70 users", "Used for tournament operations", "Videos available"],
    images: [],
    videos: ["/projects/araknid/ScreenRecording_05-04-2026 22-19-47_1.mov"],
    portraitVideo: true,
    siteStatus: "Demo video",
  },
  {
    name: "Inkbound AI",
    label: "AI email tool",
    description: "A tool that sends personalized emails to college coaches in seconds.",
    details: ["Personalized outreach", "Built for athletes", "AI assisted email writing"],
    logo: "/logos/inkbound-logo.png",
    images: [
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.26.34 PM.png",
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.26.43 PM.png",
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.26.56 PM.png",
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.27.14 PM.png",
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.27.24 PM.png",
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.27.34 PM.png",
      "/projects/inkboundai/Screenshot 2026-05-04 at 10.27.45 PM.png",
    ],
    videos: [],
    siteStatus: "Product visuals",
  },
];

const profileImages = [
  "/profile/profile1.jpg",
  "/profile/profile2.jpg",
  "/profile/profile3.jpg",
  "/profile/profile4.jpg",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Software portfolio</p>
          <h1>Elan Romo</h1>
          <p className="intro">
            I build practical software for real people, from mobile apps and AI tools to
            ecommerce sites and tournament platforms.
          </p>
          <div className="actions">
            <a href="#projects">View projects</a>
            <a href="https://github.com/elanr9" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/elanromo/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/elanromo/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <div className="photoCard" aria-label="Profile photo area">
          <div className="profileCarousel">
            {profileImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Elan Romo profile ${index + 1}`}
                style={{ animationDelay: `${index * 4}s` }}
              />
            ))}
          </div>
          <p>Elan Romo</p>
        </div>
      </section>

      <section className="overview" aria-label="Portfolio highlights">
        <div>
          <strong>7</strong>
          <span>Projects</span>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="sectionHeader">
          <p className="eyebrow">Selected work</p>
          <h2>Software I have built</h2>
        </div>

        <div className="grid">
          {projects.map((project) => {
            const visualsId = getProjectVisualsId(project.name);
            const hasImages = project.images.length > 0;

            return (
              <article className="projectCard" key={project.name}>
                <div className="cardTop">
                  <div>
                    <p>{project.label}</p>
                    <h3>{project.name}</h3>
                  </div>
                  {project.logo ? (
                    <img className="projectLogo" src={project.logo} alt={`${project.name} logo`} />
                  ) : null}
                </div>
                {hasImages || project.videos.length > 0 ? (
                  <div className="mediaGrid">
                    {project.images.slice(0, 4).map((image) => (
                      <a
                        className="mediaTile"
                        href={`#${visualsId}`}
                        key={image}
                        aria-label={`Open ${project.name} visuals`}
                      >
                        <img src={image} alt={`${project.name} product preview`} />
                      </a>
                    ))}
                    {project.videos.map((video) => (
                      <video
                        className={project.portraitVideo ? "portraitVideo" : undefined}
                        key={video}
                        src={video}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="emptyMedia">More project visuals coming soon</div>
                )}
                <div className="projectBody">
                  <p className="description">{project.description}</p>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="cardActions">
                    {project.site ? (
                      <a href={project.site} target="_blank" rel="noreferrer">
                        View site
                      </a>
                    ) : null}
                    {hasImages ? (
                      <a href={`#${visualsId}`}>{project.siteStatus ?? "Product visuals"}</a>
                    ) : project.site ? null : (
                      <span>{project.siteStatus ?? "No public URL"}</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {projects
          .filter((project) => project.images.length > 0)
          .map((project) => (
            <section
              className="visualLightbox"
              id={getProjectVisualsId(project.name)}
              key={`${project.name}-visuals`}
              aria-label={`${project.name} visuals`}
            >
              <a className="lightboxBackdrop" href="#projects" aria-label="Close visuals"></a>
              <div className="lightboxPanel">
                <div className="lightboxHeader">
                  <div>
                    <p className="eyebrow">{project.label}</p>
                    <h2>{project.name} visuals</h2>
                  </div>
                  <a href="#projects">Close</a>
                </div>
                <div className="visualGrid">
                  {project.images.map((image, index) => (
                    <a href={image} target="_blank" rel="noreferrer" key={image}>
                      <img src={image} alt={`${project.name} visual ${index + 1}`} />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ))}
      </section>
    </main>
  );
}
