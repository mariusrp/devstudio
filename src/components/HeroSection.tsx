import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Fade,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  CodeRounded,
  PhoneIphoneRounded,
  LanguageRounded,
  KeyboardArrowDown,
  ArrowForward,
} from "@mui/icons-material";

const HeroSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const menuItems = [
    { id: "projects", label: "Prosjekter" },
    { id: "team", label: "Teamet" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (elementId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* Navigation */}
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.8)" : "transparent",
          transition: "all 0.3s",
          backdropFilter: trigger ? "blur(10px)" : "none",
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "primary.main",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    DS
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    background: "linear-gradient(to right, #2563eb, #4f46e5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  DevStudio
                </Typography>
              </Box>

              {!isMobile && (
                <Box sx={{ display: "flex", gap: 4 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      color="inherit"
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontWeight: 600,
                        color: "rgba(0, 0, 0, 0.7)",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: 2,
                          bgcolor: "rgba(37, 99, 235, 0.8)",
                          transform: "scaleX(0)",
                          transition: "transform 0.3s",
                        },
                        "&:hover::after": {
                          transform: "scaleX(1)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              component="li"
              onClick={() => scrollToSection(item.id)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Content */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
          pt: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Hero Text */}
            <Grid item xs={12} sx={{ textAlign: "center", mb: 6 }}>
              <Fade in timeout={1000}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    background: "linear-gradient(to right, #2563eb, #4f46e5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Skreddersydde Digitale Løsninger
                </Typography>
              </Fade>
              <Fade in timeout={1500}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    maxWidth: 800,
                    mx: "auto",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    px: 2,
                  }}
                >
                  Vi utvikler moderne digitale løsninger som styrker din
                  bedrifts vekst og effektivitet
                </Typography>
              </Fade>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mb: 8,
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  px: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => scrollToSection("projects")}
                  sx={{
                    background: "linear-gradient(45deg, #2563eb, #4f46e5)",
                    boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.2)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #1d4ed8, #4338ca)",
                      boxShadow: "0 6px 20px 0 rgba(37, 99, 235, 0.3)",
                    },
                  }}
                >
                  Se Våre Prosjekter
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection("team")}
                  sx={{
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                    },
                  }}
                >
                  Kontakt Oss
                </Button>
              </Box>
            </Grid>

            {/* Service Cards */}
            <Grid
              container
              spacing={3}
              sx={{
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
                pb: { xs: 12, md: 8 },
              }}
            >
              {[
                {
                  icon: <LanguageRounded sx={{ fontSize: 28 }} />,
                  title: "Webutvikling",
                  description:
                    "Moderne og responsive nettsider som engasjerer dine kunder",
                },
                {
                  icon: <PhoneIphoneRounded sx={{ fontSize: 28 }} />,
                  title: "App-utvikling",
                  description:
                    "Skreddersydde mobilapplikasjoner for iOS og Android",
                },
                {
                  icon: <CodeRounded sx={{ fontSize: 28 }} />,
                  title: "API-utvikling",
                  description: "Robuste backend-løsninger og API-integrasjoner",
                },
              ].map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Fade in timeout={2000 + index * 500}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255, 0.9) 0%, rgba(255,255,255, 0.95) 100%)",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease-in-out",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(37, 99, 235, 0.06)",
                        border: "1px solid",
                        borderColor: "rgba(37, 99, 235, 0.08)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #2563eb, #4f46e5)",
                          opacity: 0,
                          transition: "opacity 0.3s ease-in-out",
                        },
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 8px 32px rgba(37, 99, 235, 0.12)",
                          borderColor: "rgba(37, 99, 235, 0.16)",
                          "&::before": {
                            opacity: 1,
                          },
                          "& .service-icon": {
                            transform: "scale(1.1) rotate(5deg)",
                            background:
                              "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                          },
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box
                          className="service-icon"
                          sx={{
                            background:
                              "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)",
                            width: 56,
                            height: 56,
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                            color: "white",
                            transition: "all 0.3s ease-in-out",
                            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15)",
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h3"
                          sx={{
                            mb: 2,
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#1a1f36",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            color: "#4a5568",
                            mb: 2,
                          }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Scroll Indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 16, md: 32 },
              left: "50%",
              transform: "translateX(-50%)",
              animation: "bounce 2s infinite",
              zIndex: 0,
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateX(-50%) translateY(0)",
                },
                "50%": {
                  transform: "translateX(-50%) translateY(10px)",
                },
              },
            }}
          >
            <KeyboardArrowDown
              sx={{
                fontSize: { xs: 32, md: 40 },
                color: "primary.main",
                opacity: 0.8,
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
