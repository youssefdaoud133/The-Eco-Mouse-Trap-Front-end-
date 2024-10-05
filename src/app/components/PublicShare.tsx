"use client";

import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        console.log("Fetched data:", data);
  
        if (Array.isArray(data)) {
          setPosts(data);  // Directly set data, as it is the array of posts
          console.log("Posts set successfully:", data);
        } else {
          console.error("Data structure is not an array");
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);
      

  const handlePostSubmit = async () => {
    if (name.trim() && country.trim() && content.trim()) {
      const newPost: Post = { name, country, content };

      try {
        const response = await fetch("http://localhost:5000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });

        if (response.ok) {
          const createdPost = await response.json();
          setPosts((prevPosts) => [...prevPosts, createdPost]);
          console.log("Post created and added to state:", createdPost);
          setName("");
          setCountry("");
          setContent("");
        } else {
          console.error("Failed to create post:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to create post:", error);
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
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
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Country"
                variant="outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
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
                required
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
        {loading ? (
          <Typography color="textSecondary">Loading posts...</Typography>
        ) : posts.length > 0 ? (
          <>
            {console.log("Rendering posts:", posts)}
            {posts.map((post, index) => (
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
                    sx={{
                      textAlign: "left",
                      wordWrap: "break-word",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </>
        ) : (
          <Typography color="textSecondary">No posts yet. Write something!</Typography>
        )}
      </Box>
    </Container>
  );
};

export default YourPage;
