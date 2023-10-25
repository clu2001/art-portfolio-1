import React from "react"; 
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { createMuiTheme } from '@material-ui/core/styles';


const Characters = () => {
    const itemData = [
        {
          img: 'mithc.png',
          title: 'The Man in the High Castle',
          author: 'The Man in the High Castle'
        },
        {
          img: 'soldier.png',
          title: 'Soldier',
          author: 'The Beast Within',
        },
        {
          img: 'wrath.png',
          title: 'wrath',
          author: 'Wrath',
        },
        {
          img: 'lust.png',
          title: 'lust',
          author: 'Lust',
        },
        {
          img: 'kyd.png',
          title: 'kyd',
          author: 'Kill Your Darlings',
        },
        {
          img: 'girl.png',
          title: 'girl',
          author: 'Red',
        },
        {
          img: 'envy.png',
          title: 'envy',
          author: 'Envy',
        },
      ];


    return (
        <Box sx={{ overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="top" title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      );
}

export default Characters