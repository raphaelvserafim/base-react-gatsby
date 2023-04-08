import React from 'react';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import { navigate } from 'gatsby';



function SearchInput(props: any) {
    const [searchTerm, setSearchTerm] = useState(props.value || "");

    const handleSearch = () => {
        navigate(`/search/${searchTerm}`, { replace: true });

    };

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <Container>
                <Paper component="form" sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: "100%" }} >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search for a recipe"
                        inputProps={{ 'aria-label': 'search for a recipe' }}
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: '10px' }}
                        aria-label="search"
                        onClick={handleSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>

            </Container>
        </>
    );
}

export default SearchInput;