
import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { createChainedFunction } from '@material-ui/core';

const APP_KEY = '0084e0c6e15e687676ff408fc074def6'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


function closeOverlay() {
  App.createMap.mapmap.overlay.setMap(null)
};


export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const coords = [
    { lat:37.500701, lng:127.01066, category: "restaurant", user: "Kim" }, 
    { lat:37.600201, lng:127.050167, category: "restaurant", user: "Kim"  }, 
    { lat:37.533201, lng:127.022167, category: "restaurant", user: "Kaili"  }, 
    { lat:37.566201, lng:127.033167, category: "restaurant", user: "Kaili"   }, 
    { lat:37.512201, lng:127.075167, category: "hospital", user: "Youtube1"   }, 
    { lat:37.561201, lng:127.011167, category: "hospital", user: "Youtube1" }, 
    { lat:37.517201, lng:127.087167, category: "hospital", user: "Youtube1" }, 
    { lat:37.573201, lng:127.016167, category: "hospital", user: "Youtube1" }, 
    { lat:37.522201, lng:127.012167, category: "hospital", user: "Youtube1" }, 
    { lat:37.546201, lng:127.116167, category: "cafe", user: "Youtube2" }, 
    { lat:37.561201, lng:127.022167, category: "cafe", user: "Youtube2"  }, 
    { lat:37.582201, lng:127.016167, category: "cafe", user: "Youtube2"  }, 
    { lat:37.515201, lng:127.051167, category: "cafe", user: "Youtube2" }, 
    { lat:37.516201, lng:127.012167, category: "cafe", user: "Youtube2"  },
  ];

  const [coordsFilter, setCoorsFilter] = useState(coords);
  const [filter1, setFilter1] = useState('');
  const [Windows, setWindows] = useState(true);
  
  const onClickRestaurant = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.category === "restaurant"));
    i.preventDefault();
  };

  
  const onClickCafe = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.category === "cafe"));
    i.preventDefault();
  };

  
  const onClickHospital = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.category === "hospital"));
    i.preventDefault();
  };

  const onClickAll = (i) => {
    setFilter1(i);
    setCoorsFilter(coords);
    i.preventDefault();
  };

  const onClickJooYoung = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.user === "Kim"));
    i.preventDefault();
  };

  
  const onClickKaili = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.user === "Kaili"));
    i.preventDefault();
  };

  
  const onClickHospitalYou = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.user === "Youtube1"));
    i.preventDefault();
  };

  const onClickJCoffeeYou = (i) => {
    setFilter1(i);
    setCoorsFilter(coords.filter(e => e.user === "Youtube2"));
    i.preventDefault();
  };

  
  const closeOverlay = () => {
    createMap.mapmap.overlay.setMap(null)
  };
  
  const createMap = () => {
    const script = document.createElement('script')
    /// script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
      const { kakao } = window
      kakao.maps.load(() => {
        
        
        let container = document.getElementById('Mymap')
        let options = {
          center: new kakao.maps.LatLng(37.546502, 127.003617),
          level: 8,
        };
        
        const createdMap = new kakao.maps.Map(container, options)

        const CenterGet = createdMap.getCenter();
        console.log(createdMap.getCenter());


        let bounds = createdMap.getBounds();

        let content = 
        '<div class="wrap">' + 
        '    <div class="info">' + 
        '        <div class="title">' + 
        '            음식점 1호점' + 
        '            <div class="close" onclick="closeOverlay()"></div>' + 
        '        </div>' + 
        '     <div>' +
        '       내용 설명 '  +       
        '      </div>' +
        '      <div>' +
        '        LINK 클릭 '  +       
        '      </div>' +
        '   </div>' +    
        '</div>';

          
       const closeOverlay = () => {
        opopp.mapmap.overlay.setMap(null)
        };

        /*for (var i=0; i<coordsFilter.length; i++)
        {
            let marker = new kakao.maps.Marker({
              map: createdMap,
              position: new kakao.maps.LatLng(coordsFilter[i].lat, coordsFilter[i].lng),
            })
        }
        */
          

        /*let opopp = coordsFilter.forEach((el) => {
          const marker = new kakao.maps.Marker({
            map: createdMap,
            position: new kakao.maps.LatLng(el.lat, el.lng),
          }) */

            
          let opopp = coordsFilter.map((el) => {
            const marker = new kakao.maps.Marker({
              map: createdMap,
              position: new kakao.maps.LatLng(el.lat, el.lng),
            }) 

          var infoWindow = new kakao.maps.InfoWindow({
            content: "AAA",
          });
          
          kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(createMap, marker, infoWindow)
          );
          
          kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infoWindow)
          );
          
          function makeOverListener(map, marker, infoWindow){
            return function() {
              infoWindow.open(createdMap, marker);
            }
          }
          function makeOutListener(infowindow) {
            return function () {
              infowindow.close();
            };
          }
          
          
          function closeOverlay() {
            mapmap.overlay.setMap(null)
          };

                             
          let mapmap = kakao.maps.event.addListener(marker, 'click', function() {
            //if(Windows){\
              /*
              
              console.log(Windows);
              {Windows ? overlay.setMap(null) : overlay.setMap(createdMap)};
              ChangeUI();
              console.log(bounds.toString());
              console.log(Windows);
              console.log(createdMap.getCenter());
              console.log(createdMap.getBounds().toString()); // Bound 획득

              */
              
              let overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: createdMap,
                clickable: true,
                position: marker.getPosition(),
              });

                
              function closeOverlay() {
                overlay.setMap(null);
              };

            });

              
              


       /*
        let marker = new kakao.maps.Marker({
          map: createdMap,
          position: new kakao.maps.LatLng(coordsFilter[0].lat, coordsFilter[0].lng),
          text: '텍스트',
        })*/

        //} else {
         // overlay.setMap(createdMap);
        //}
      })

    })
    
  }}

  useEffect(() => {createMap()},[coordsFilter]);


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [A, setA] = useState("restaurant");
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <MenuItem onClick={onClickAll}>
            All dasd
          </MenuItem>
          
          <MenuItem onClick={({A}) => onClickRestaurant}>
            Restuarant
          </MenuItem>
          
          <MenuItem onClick={onClickCafe}>
            Cafe
          </MenuItem>

          <MenuItem onClick={onClickHospital}>
            Hospital
          </MenuItem>
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <div>        
      <div id="Mymap" style={{ width: '100vw', height: '80vh' }}></div>
      </div>
      <div className={classes.friend}>
        <Toolbar>
          <MenuItem onClick={onClickJooYoung}>
              Joo Young Kim
          </MenuItem>
          
          <MenuItem onClick={onClickKaili}>
              Kaili Wu
          </MenuItem>

          <MenuItem onClick={onClickHospitalYou}>
              Hosptial YouTuber
          </MenuItem>
          
          <MenuItem onClick={onClickJCoffeeYou}>
              Coffee Youtuber
          </MenuItem>

        </Toolbar>
      </div>
    </div>
  );
}
