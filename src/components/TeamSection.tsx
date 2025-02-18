import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const teamMembers = [
  {
    name: "Marius Phillips",
    role: "Frontend Developer",
    description: "Spesialist på React og moderne frontend-teknologier",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    email: "marius.e.phillips@gmail.com",
    github: "https://github.com/mariusrp",
    linkedin: "https://www.linkedin.com/in/marius-phillips-85a10b247/",
  },
  {
    name: "Kristian Hjelmtveit",
    role: "Backend Developer",
    description: "Ekspert på .NET og databasearkitektur",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    email: "lolemann2000@hotmail.no",
    github: "https://github.com/Solido7",
    linkedin: "https://www.linkedin.com/in/kristian-hjelmtveit-54263521a/",
  },
  {
    name: "Adrian Phillips",
    role: "DevOps Engineer",
    description: "Spesialist på skyinfrastruktur og automatisering",
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    email: "adrian.e.phillips00@gmail.com",
    github: "https://github.com/phils0n",
    linkedin: "https://www.linkedin.com/in/adrian-phillips/",
  },
];

const TeamSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="team"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
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
            }}
          >
            Teamet
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
            }}
          >
            Erfarne utviklere dedikert til å skape moderne digitale løsninger
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
                  borderRadius: "20px",
                  border: "1px solid",
                  borderColor: "rgba(37, 99, 235, 0.1)",
                  boxShadow: "0 4px 24px rgba(37, 99, 235, 0.06)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 32px rgba(37, 99, 235, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "16px",
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {member.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#1a1f36",
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                    }}
                  >
                    {member.role}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3, color: "#4a5568" }}>
                    {member.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mt: "auto",
                    }}
                  >
                    <IconButton
                      href={`mailto:${member.email}`}
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <MailIcon />
                    </IconButton>
                    <IconButton
                      href={member.github}
                      target="_blank"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href={member.linkedin}
                      target="_blank"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
