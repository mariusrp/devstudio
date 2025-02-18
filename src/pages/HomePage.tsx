import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "../components/HeroSection";
import ProjectShowcase from "../components/ProjectShowcase";
import TeamSection from "../components/TeamSection";

// Dummy project data
// export const projectsData = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description: "En moderne nettbutikk bygget med React og Node.js",
//     image: "https://via.placeholder.com/400x300",
//     technologies: ["React", "Node.js", "MongoDB"],
//     category: "web",
//     link: "https://example.com",
//   },
//   {
//     id: 2,
//     title: "Restaurant Booking App",
//     description: "Mobilapp for bordbestilling og menyvisning",
//     image: "https://via.placeholder.com/400x300",
//     technologies: ["React Native", "Firebase"],
//     category: "mobile",
//     link: "https://example.com",
//   },
//   {
//     id: 3,
//     title: "CRM System",
//     description: "Skreddersydd CRM-løsning for eiendomsmeglere",
//     image: "https://via.placeholder.com/400x300",
//     technologies: ["Angular", "TypeScript", "AWS"],
//     category: "web",
//     link: "https://example.com",
//   },
//   {
//     id: 4,
//     title: "IoT Dashboard",
//     description: "Sanntids overvåkingssystem for industrielt utstyr",
//     image: "https://via.placeholder.com/400x300",
//     technologies: ["Vue.js", "Python", "Docker"],
//     category: "web",
//     link: "https://example.com",
//   },
//   {
//     id: 5,
//     title: "Fitness Tracking App",
//     description: "Personlig treningsapp med AI-drevet coaching",
//     image: "https://via.placeholder.com/400x300",
//     technologies: ["Swift", "CoreML", "Firebase"],
//     category: "mobile",
//     link: "https://example.com",
//   },
//   {
//     id: 6,
//     title: "Learning Management System",
//     description: "Digital læringsplattform for høyere utdanning",
//     image: "https://via.placeholder.com/400x300",
//     technologies: ["Next.js", "PostgreSQL", "Redis"],
//     category: "web",
//     link: "https://example.com",
//   },
// ];

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <Box
        component="section"
        id="portfolio"
        sx={{ py: 12, bgcolor: "background.default" }}
      >
        <Container maxWidth="lg">
          <ProjectShowcase />
          <TeamSection />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
