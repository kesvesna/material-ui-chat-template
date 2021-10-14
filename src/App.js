import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Input, TextField, Stack, Chip, Avatar, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { useRef, useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function App() {

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current?.focus();
    }, []);

  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={3}>
                  <Item style={{ height: '10vh'}}>
                      <Stack direction="row"  alignItems="center">
                      <TextField fullWidth id="standard-basic" label="Поиск" variant="standard" />
                      <SearchIcon />
                      </Stack>
                  </Item>
                  <Item style={{ height: '10vh'}}>
                      <Stack direction="row"  alignItems="center">
                          <TextField fullWidth id="standard-basic" label="Добавить чат" variant="standard" />
                          <AddIcon />
                      </Stack>
                  </Item>
                  <Item style={{ height: '68vh', overflowX: 'auto'}}>
                      <List>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 1" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <DraftsIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 2" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <AccessAlarmIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 3" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <DraftsIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 4" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 5" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <DraftsIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 6" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 7" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <DraftsIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 8" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 9" />
                              </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <DraftsIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Чат 10" />
                              </ListItemButton>
                          </ListItem>
                      </List>
                  </Item>
              </Grid>
              <Grid item xs={9}>
                  <Item style={{ height: '10vh'}} alignItems="center">
                      <Chip icon={<InboxIcon />} label="Чат 1" variant="outlined" />
                  </Item>
                  <Item style={{ height: '68vh', overflowX: 'auto'}}>
                            <Stack display="row" alignItems='flex-end'  marginBottom="10px">
                                <Item style={{ width: '50%'}}>
                                    Шеуь
                                </Item>
                            </Stack>
                      <Stack display="row" alignItems='flex-start' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              asdf asdfasdf asdfas dfasdf sadf sadf asdf asd fasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asd
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-end' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-start' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-end'  marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-start' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              asdf asdfasdf asdfas dfasdf sadf sadf asdf asd fasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asd
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-end' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-start' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-end'  marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-start' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              asdf asdfasdf asdfas dfasdf sadf sadf asdf asd fasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asd
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-end' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                      <Stack display="row" alignItems='flex-start' marginBottom="10px">
                          <Item style={{ width: '50%'}}>
                              Шеуь
                          </Item>
                      </Stack>
                  </Item>
                  <Item style={{ height: '10vh'}}>
                      <Stack direction="row"  alignItems="center">
                          <TextField inputRef={inputRef} fullWidth id="standard-basic" label="Введите сообщение" variant="standard" />
                          <SendIcon />
                      </Stack>
                  </Item>
              </Grid>
          </Grid>
      </Box>
  );
}

