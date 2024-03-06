import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Handle button click
        console.log('Button clicked!');
    };

    return (
        <div>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={3}>
                            <IconButton color="inherit" sx={{ fontSize: '1.5em', borderRadius: '50%', m: '10px' }}>
                                <SearchIcon />
                            </IconButton>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Job Board
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} container justifyContent="center" spacing={3} sx={{ display: { xs: "none", md: "flex" }}}>
                            <Grid item>
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Button color="inherit">Home</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/jobs" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    
                                    <Button color="inherit">Browse Jobs</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/candidate-dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Button color="inherit">Candidate</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/employer-dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Button color="inherit">Employee</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Button color="inherit">Contact</Button>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={3} container justifyContent="flex-end" sx={{ display: { xs: "none", md: "flex" }}} >
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                            </Link>
                            <Link to="/post-job" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="success" onClick={handleButtonClick}>Post a Job</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
