import React, { useEffect, useState ,useContext} from 'react';
import _ from 'lodash';
import {
    Button,
    Card,
    Form,
    Icon,
  } from 'semantic-ui-react';
import { ListingContext } from '../contexts/ListingContextProvider';
import { useSocket } from "use-socketio";

export function WebSocketControllerContainer() {
    const { socket } = useSocket();
    const { setFilterTxt } = useContext(ListingContext);

      
    function connect(){
        socket.connect()
        socket.emit("start")
    }
    function disconnect(){
        socket.emit("stop")
        socket.disconnect()
    }
    function restart(){
        socket.emit("restart")
        socket.disconnect()
        
    }
    
    const onInputChange = event => {
        console.log(event)
        setFilterTxt(event.target.value)
    };

    
    const {listings} = useContext(ListingContext);
    return (
        <Card>
        <Form>
          <Card.Content>
          <i>{`link count: ${listings.length}`}</i>
            <Card.Meta>
              <Button.Group>
                <Button
                  onClick={() => connect()}
                  icon
                >
                  <Icon name="play" />
                </Button>
                <Button onClick={() => disconnect()} icon>
                  <Icon name="stop" />
                </Button>
                <Button onClick={() => disconnect()} icon>
                  <Icon name="pause" />
                </Button>
                <Button onClick={() => restart()} icon>
                <Icon name="redo" />
              </Button>
              </Button.Group>
            </Card.Meta>
            <Card.Description className="p5">
               <Button.Group>
               {/* <Button onClick={() => onControllerChange({ touchY: 1 })} icon>
                <Icon name="clock" />
              </Button> */}

                <Button
            
                  onClick={() =>
                    console.log("email")
                  }
                  icon
                >
                  <Icon name="envelope" />
                </Button>
              </Button.Group>
              <input
                className="m-t-10"
                type="text"
                onChange={onInputChange}
                name="filter-field"
                placeholder="filter results"
              />
              {/* <p className="margin0 padding0" align="left">
                <Icon
                  name="close icon"
                  onClick={this.onClickRemove}
                ></Icon>
                <a href={`${this.props.item}`}> {this.props.item}</a>
              </p>
              <div className="ui action input">
                <input type="text" placeholder="Search...">
                  <button className="ui button">Search</button>
                </input>
              </div> */}
            </Card.Description>
          </Card.Content>
        </Form>
      </Card>
    );
  }