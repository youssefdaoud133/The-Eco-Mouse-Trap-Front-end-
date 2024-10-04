"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

interface Post {
  name: string;
  country: string;
  content: string;
}

const YourPage = () => {
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);

  // Handle post submission
  const handlePostSubmit = () => {
    if (name.trim() && country.trim() && content.trim()) {
      const newPost: Post = { name, country, content };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setName("");
      setCountry("");
      setContent("");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      {/* Section 1: Write and Publish a Post */}
      <Box component="section" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Create a Post
        </Typography>
        <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Country"
                variant="outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Write your post here..."
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handlePostSubmit}
              >
                Publish
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Section 2: Display All Posts */}
      <Box component="section">
        <Typography variant="h4" component="h2" gutterBottom>
          All Posts
        </Typography>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card key={index} sx={{ mb: 4 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: blue[500] }}>
                    {post.name.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.name}
                subheader={post.country}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  sx={{ textAlign: "left", wordWrap: "break-word", whiteSpace: "pre-wrap" }} // Added properties
                >
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography color="textSecondary">
            No posts yet. Write something!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default YourPage;
