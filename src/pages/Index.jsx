import React from "react";
import { Box, Heading, Text, Input, Button, Flex, Spacer, IconButton, Grid, GridItem, Image, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaStar, FaHeart, FaTasks, FaHistory, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => (
  <Flex align="center" px={4} py={2} bg={useColorModeValue("gray.100", "gray.900")}>
    <Heading size="md">AI Central</Heading>
    <Spacer />
    <Input placeholder="Search..." maxW="sm" mr={4} />
    <IconButton icon={<FaSearch />} variant="ghost" />
    <Stack direction="row" spacing={4}>
      <Link>Saved AIs</Link>
      <Link>Requests</Link>
      <Link>Favorites</Link>
      <Link>Tasks</Link>
      <Link>Activity</Link>
    </Stack>
    <Spacer />
    <IconButton icon={<FaFacebook />} variant="ghost" />
    <IconButton icon={<FaTwitter />} variant="ghost" />
    <IconButton icon={<FaInstagram />} variant="ghost" />
  </Flex>
);

const Banner = () => (
  <Box textAlign="center" py={20} px={6} bg="blue.500" color="white">
    <Heading as="h1" size="2xl" mb={4}>
      THERE'S AN AI FOR THAT
    </Heading>
    <Text fontSize="2xl">
      Discover from <b>1,234</b> AIs for any task or job
    </Text>
  </Box>
);

const PoweredBy = () => (
  <Box textAlign="center" py={10} px={6}>
    <Text fontSize="xl" mb={4}>
      Powered by
    </Text>
    <Heading size="lg">Venturekit</Heading>
    <Text>(Business plans)</Text>
    <Button colorScheme="blue" size="lg" mt={6}>
      Discover Tasks
    </Button>
  </Box>
);

const AICard = ({ title, description, rating, imageUrl }) => (
  <Box borderWidth={1} borderRadius="lg" p={4}>
    <Image src={imageUrl} alt={title} />
    <Heading size="md" mt={2}>
      {title}
    </Heading>
    <Text mt={2}>{description}</Text>
    <Flex align="center" mt={4}>
      <Box as={FaStar} color="orange.400" />
      <Text ml={1} fontWeight="bold">
        {rating}
      </Text>
    </Flex>
  </Box>
);

const FeaturedAIs = () => (
  <Box py={10} px={6}>
    <Heading size="xl" mb={4}>
      Featured AIs
    </Heading>
    <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
      <AICard title="AI Writer" description="Generate articles and content" rating={4.5} imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHdyaXRpbmclMjBhc3Npc3RhbnR8ZW58MHx8fHwxNzExNTg3MzA2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
      <AICard title="AI Artist" description="Create stunning digital art" rating={4.8} imageUrl="https://images.unsplash.com/photo-1695426093310-b7255c8797cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydHxlbnwwfHx8fDE3MTE1ODczMDd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      <AICard title="AI Coder" description="Intelligent coding assistant" rating={4.2} imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHByb2dyYW1taW5nJTIwYXNzaXN0YW50fGVufDB8fHx8MTcxMTU4NzMwN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
    </Grid>
  </Box>
);

const NewAIs = () => (
  <Box py={10} px={6} bg={useColorModeValue("gray.50", "gray.800")}>
    <Heading size="xl" mb={4}>
      New Releases
    </Heading>
    <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
      <AICard title="AI Tutor" description="Personalized learning assistant" rating={4.6} imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGVkdWNhdGlvbiUyMHR1dG9yfGVufDB8fHx8MTcxMTU4NzMwN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
      <AICard title="AI Stylist" description="Fashion advice and outfits" rating={4.1} imageUrl="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGZhc2hpb24lMjBzdHlsaXN0fGVufDB8fHx8MTcxMTU4NzMwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
      <AICard title="AI Therapist" description="Mental health support chatbot" rating={4.4} imageUrl="https://images.unsplash.com/photo-1581333100576-b73befd79a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRoZXJhcHklMjBjaGF0Ym90fGVufDB8fHx8MTcxMTU4NzMwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
    </Grid>
  </Box>
);

const Footer = () => (
  <Box py={10} px={6} bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
    <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
      <Box>
        <Heading size="md" mb={4}>
          About
        </Heading>
        <Link display="block" mb={2}>
          Our Story
        </Link>
        <Link display="block" mb={2}>
          Team
        </Link>
        <Link display="block" mb={2}>
          Careers
        </Link>
      </Box>
      <Box>
        <Heading size="md" mb={4}>
          Community
        </Heading>
        <Link display="block" mb={2}>
          Twitter
        </Link>
        <Link display="block" mb={2}>
          Facebook
        </Link>
        <Link display="block" mb={2}>
          Contact Us
        </Link>
      </Box>
      <Box>
        <Heading size="md" mb={4}>
          Resources
        </Heading>
        <Link display="block" mb={2}>
          Blog
        </Link>
        <Link display="block" mb={2}>
          FAQ
        </Link>
        <Link display="block" mb={2}>
          Terms of Service
        </Link>
      </Box>
    </Grid>
    <Text mt={8} textAlign="center">
      © 2023 AI Central. All rights reserved.
    </Text>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <PoweredBy />
      <FeaturedAIs />
      <NewAIs />
      <Footer />
    </Box>
  );
};

export default Index;
