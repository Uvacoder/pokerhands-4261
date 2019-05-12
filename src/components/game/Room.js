import Peer from 'peerjs';

class Room {

  static create() {
    return new Promise(resolve => {
      (new Peer()).on('open', id => {
        resolve(id);
      });
    });
  }

}

export default Room;
