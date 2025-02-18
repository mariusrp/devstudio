// ProjectShowcase.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Close,
  Launch,
  GitHub,
  DataObject,
  Speed,
  Devices,
  CloudDone,
  PhoneIphoneRounded,
  Web,
  ArrowForward,
} from "@mui/icons-material";

// Interface definitions
interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  // features: string[];
  highlights: Highlight[];
  type: "web" | "mobile";
  demoUrl?: string;
  githubUrl?: string;
}

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Sauna Booking Platform",
    description:
      "Moderne bookingløsning for badstuer med sanntidstilgjengelighet",
    longDescription: `Vår komplette digitale løsning for badstue-booking kombinerer 
    brukervennlighet med avansert funksjonalitet. Systemet håndterer alt fra 
    timebestilling til automatisk varsling og betalingsintegrasjon.
    
    Plattformen er bygget med fokus på skalerbarhet og ytelse, og bruker moderne 
    teknologier for å sikre en sømløs opplevelse for både brukere og administratorer. 
    Sanntidsoppdateringer og automatiserte prosesser gjør bookingprosessen enkel og effektiv.
    
    Key highlights inkluderer:
    • Avansert bookingsystem med sanntidsoppdateringer
    • Integrert betalingsløsning med Stripe
    • Automatiserte påminnelser og varsler
    • Omfattende administrativt dashboard
    • Detaljert rapportering og analyse`,
    image: "../../public/assets/sauna.png",
    technologies: [
      "React",
      "TypeScript",
      ".NET Core",
      "SQL",
      "Stripe",
      "VIPPS API",
      "Material-UI",
    ],
    // features: [
    //   "Sanntids tilgjengelighetsvisning",
    //   "Automatisert booking og avbestilling",
    //   "Integrert betalingsløsning",
    //   "Brukertilpasset dashboard",
    //   "Administrativt kontrollpanel",
    //   "Automatiske påminnelser",
    //   "Avansert bookingkalender",
    //   "Statistikk og rapportering",
    // ],
    highlights: [
      {
        icon: <Speed />,
        title: "Optimalisert Ytelse",
        description: "100% oppetid og lynrask lasting",
      },
      {
        icon: <Devices />,
        title: "Responsivt Design",
        description: "Sømløs opplevelse på alle enheter",
      },
      {
        icon: <CloudDone />,
        title: "Skalerbar Arkitektur",
        description: "Bygget for fremtidig vekst",
      },
    ],
    type: "web",
    demoUrl: "https://varm.netlify.app/",
    githubUrl: "https://github.com/yourusername/sauna-booking",
  },
  {
    id: 2,
    title: "Intersikt Mobile App",
    description:
      "Innovativ mobilapplikasjon for lab arbeidsflyt, prosjektstyring og (QMS) kvalitetsstyring",
    longDescription: `Intersikt er en sofistikert mobilapplikasjon som revolusjonerer intern 
    kommunikasjon og prosjektoppfølging. Appen kombinerer chat, oppgavestyring 
    og dokumentdeling i én sømløs brukeropplevelse.
    
    Utviklet med React Native for optimal ytelse på både iOS og Android, tilbyr 
    Intersikt en rekke innovative funksjoner som forenkler teamsamarbeid og 
    prosjektstyring. Appen støtter offline-modus og har avanserte 
    synkroniseringsfunksjoner.
    
    Nøkkelfunksjoner inkluderer:
    • Sanntids meldingsutveksling med ende-til-ende kryptering
    • Avansert prosjekt- og oppgavestyring
    • Integrert dokumenthåndtering med versjonskontroll
    • Video-konferanser med skjermdelingsmuligheter
    • Omfattende offline-støtte`,
    image: "../../public/assets/intersikt.png",
    technologies: ["React Native", "Expo Go", "TypeScript", ".NET", "NO-SQL"],
    highlights: [
      {
        icon: <DataObject />,
        title: "Avansert Synkronisering",
        description: "Sømløs datasynkronisering",
      },
      {
        icon: <Speed />,
        title: "Native Ytelse",
        description: "Optimalisert for mobile enheter",
      },

      {
        icon: <PhoneIphoneRounded />,
        title: "Tale til tekst",
        description: "Konverterer tale til tekst i sanntid",
      },
    ],
    type: "mobile",
    demoUrl: "https://testflight.apple.com/join/zyJVhzvf",
    githubUrl: "https://github.com/yourusername/intersikt",
  },
];

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-project-id"));
          setIsVisible((prev) => ({
            ...prev,
            [id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-project-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const renderProjectCard = (project: Project) => {
    const isWeb = project.type === "web";

    return (
      <Card
        data-project-id={project.id}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: isWeb ? "row" : "row-reverse" },
          background: isWeb
            ? "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)"
            : "linear-gradient(145deg, #fafbff 0%, #ffffff 100%)",
          borderRadius: { xs: "24px", md: isWeb ? "24px" : "32px" },
          overflow: "hidden",
          border: "1px solid",
          borderColor: "rgba(37, 99, 235, 0.1)",
          boxShadow: isWeb
            ? "0 4px 24px rgba(37, 99, 235, 0.06)"
            : "0 8px 32px rgba(59, 130, 246, 0.08)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isVisible[project.id] ? 1 : 0,
          transform: isVisible[project.id]
            ? "translateY(0)"
            : "translateY(20px)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: isWeb
              ? "0 12px 36px rgba(37, 99, 235, 0.12)"
              : "0 16px 48px rgba(59, 130, 246, 0.15)",
          },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: isWeb ? "55%" : "45%" },
            position: "relative",
            overflow: "hidden",
            bgcolor: isWeb
              ? alpha(theme.palette.primary.main, 0.02)
              : "transparent",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", md: isWeb ? "500px" : "600px" },
              p: isWeb ? { xs: 2, md: 4 } : { xs: 4, md: 6 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before": isWeb
                ? {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)",
                    zIndex: 1,
                  }
                : {},
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "100%",
                objectFit: isWeb ? "cover" : "contain",
                borderRadius: isWeb ? "16px" : "24px",
                boxShadow: isWeb
                  ? "0 4px 16px rgba(0, 0, 0, 0.1)"
                  : "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: isWeb ? "scale(1.02)" : "scale(1.05)",
                },
              }}
            />
          </Box>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 2,
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2rem" },
                  fontWeight: 600,
                  color: "#1a1f36",
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>
              <Chip
                icon={isWeb ? <Web /> : <PhoneIphoneRounded />}
                label={isWeb ? "Web Platform" : "Mobile App"}
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  borderRadius: "12px",
                  "& .MuiChip-icon": {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#4a5568",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </Typography>
          </Box>

          {/* Technologies */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "#1a1f36",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Teknologier
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    bgcolor: alpha(theme.palette.secondary.main, 0.08),
                    color: theme.palette.secondary.main,
                    borderRadius: "8px",
                    transition: "all 0.2s ease-in-out",
                    cursor: "default",
                    "&:hover": {
                      bgcolor: alpha(theme.palette.secondary.main, 0.15),
                      transform: "translateY(-2px)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 2,
              mb: 4,
            }}
          >
            {project.highlights.map((highlight, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  bgcolor: alpha(theme.palette.primary.main, 0.03),
                  border: "1px solid",
                  borderColor: alpha(theme.palette.primary.main, 0.08),
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  {highlight.icon}
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#1a1f36",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {highlight.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#4a5568",
                    display: "block",
                    fontSize: "0.8rem",
                  }}
                >
                  {highlight.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: "auto",
              flexWrap: "wrap",
            }}
          >
            {project.demoUrl && (
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                href={project.demoUrl}
                target="_blank"
                sx={{
                  background: "linear-gradient(45deg, #2563eb, #4f46e5)",
                  borderRadius: "12px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.2)",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(45deg, #1d4ed8, #4338ca)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px 0 rgba(37, 99, 235, 0.3)",
                  },
                }}
              >
                Besøk Prosjekt
              </Button>
            )}
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8faff",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Utvalgte Prosjekter
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              px: 2,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            Avanserte løsninger skreddersydd for morgendagens utfordringer
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {projects.map((project) => (
            <Grid item xs={12} key={project.id}>
              {renderProjectCard(project)}
            </Grid>
          ))}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          maxWidth="lg"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: "24px",
              boxShadow: "0 24px 48px rgba(37, 99, 235, 0.2)",
              background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle
                sx={{
                  pr: 8,
                  pt: 4,
                  pb: 4,
                  borderBottom: "1px solid",
                  borderColor: "rgba(37, 99, 235, 0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="h4" sx={{ color: "#1a1f36" }}>
                    {selectedProject.title}
                  </Typography>
                  <Chip
                    icon={
                      selectedProject.type === "web" ? (
                        <Web />
                      ) : (
                        <PhoneIphoneRounded />
                      )
                    }
                    label={
                      selectedProject.type === "web"
                        ? "Web Platform"
                        : "Mobile App"
                    }
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  />
                </Box>
                <IconButton
                  onClick={() => setSelectedProject(null)}
                  sx={{
                    position: "absolute",
                    right: 24,
                    top: 24,
                    bgcolor: "rgba(37, 99, 235, 0.1)",
                    "&:hover": {
                      bgcolor: "rgba(37, 99, 235, 0.2)",
                    },
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ p: 4 }}>
                {/* Project Image */}
                <Box sx={{ mb: 4, position: "relative" }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height:
                        selectedProject.type === "mobile" ? "600px" : "500px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit:
                          selectedProject.type === "mobile"
                            ? "contain"
                            : "cover",
                      }}
                    />
                  </Box>
                </Box>

                {/* Project Description */}
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: "#4a5568",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                  }}
                >
                  {selectedProject.longDescription}
                </Typography>

                {/* Technical Overview */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h5" sx={{ mb: 3, color: "#1a1f36" }}>
                    Teknisk Oversikt
                  </Typography>
                  <Grid container spacing={4}>
                    {/* Technologies */}
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ mb: 2, color: "#1a1f36" }}>
                        Teknologier
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {selectedProject.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: alpha(theme.palette.secondary.main, 0.1),
                              color: theme.palette.secondary.main,
                              borderRadius: "8px",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                bgcolor: alpha(
                                  theme.palette.secondary.main,
                                  0.15
                                ),
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Highlights Grid */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h5" sx={{ mb: 3, color: "#1a1f36" }}>
                    Høydepunkter
                  </Typography>
                  <Grid container spacing={3}>
                    {selectedProject.highlights.map((highlight, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            bgcolor: alpha(theme.palette.primary.main, 0.03),
                            border: "1px solid",
                            borderColor: alpha(
                              theme.palette.primary.main,
                              0.08
                            ),
                            height: "100%",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: "0 8px 24px rgba(37, 99, 235, 0.1)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              color: theme.palette.primary.main,
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            {highlight.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#1a1f36",
                              fontSize: "1.1rem",
                              mb: 1,
                            }}
                          >
                            {highlight.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#4a5568" }}>
                            {highlight.description}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </DialogContent>

              {/* Dialog Actions */}
              <DialogActions
                sx={{
                  p: 4,
                  borderTop: "1px solid",
                  borderColor: "rgba(37, 99, 235, 0.1)",
                  gap: 2,
                }}
              >
                {selectedProject.githubUrl && (
                  <Button
                    startIcon={<GitHub />}
                    variant="outlined"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    sx={{
                      borderWidth: "2px",
                      borderRadius: "12px",
                      px: 3,
                      py: 1,
                      textTransform: "none",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderWidth: "2px",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(37, 99, 235, 0.1)",
                      },
                    }}
                  >
                    Se Kode
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button
                    startIcon={<Launch />}
                    variant="contained"
                    href={selectedProject.demoUrl}
                    target="_blank"
                    sx={{
                      background: "linear-gradient(45deg, #2563eb, #4f46e5)",
                      borderRadius: "12px",
                      px: 3,
                      py: 1,
                      textTransform: "none",
                      fontWeight: 600,
                      boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.2)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background: "linear-gradient(45deg, #1d4ed8, #4338ca)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px 0 rgba(37, 99, 235, 0.3)",
                      },
                    }}
                  >
                    Se Live Demo
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProjectShowcase;
