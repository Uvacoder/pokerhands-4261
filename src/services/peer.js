import Peer from 'peerjs';

class Player {
  constructor (conn) {
    this.conn = { from: conn };
    this.listen();

    // return (async () => {
    //   await this.connect();
    //   return this;
    // })();
  }

  listen () {
    this.conn.from.on('data', data => {
      console.log('[FROM PLAYER]', this.conn.from.peer, data);
    });
  }

  connect () {
    const {
      peer: id,
      provider: peer
    } = this.conn.from;

    return new Promise(resolve => {
      this.conn.to = peer.connect(id);
      this.conn.to.on('open', () => resolve());
    });
  }

  async send (data) {
    if (!this.conn.to) await this.connect();
    this.conn.to.send(data);
  }
}

class Room2 {
  constructor () {
    this.players = [];
    this.peer = new Peer('2xx4f6zbyeu00000');
    this.listen();
    return (async () => {
      this.id = await this.open();
      return this;
    })();
  }

  open () {
    return new Promise(resolve => {
      console.log('listen on open');
      this.peer.on('open', id => {
        console.log('open');
        resolve(id)
      });
    });
  }

  listen () {
    this.peer.on('connection', conn => {
      console.log('connection');
      const player = new Player(conn);

      this.players.push(player);
      console.log('players', this.players);
      player.send({
        players: this.getPlayers()
      });
    });
  }

  getPlayers() {
    return this.players.map(player => ({
      id: player.conn.from.peer
    }));
  }
}

class Room {
  constructor (id, updateHandler) {
    // console.log('Room:', id);
    this.id = id;
    this.peer = new Peer();
    this.on('update', updateHandler);
    this.listen();
    return (async () => {
      // this.id = await this.open();
      await this.connect();
      // console.log('AFTER CONNECT', this.id);
      return this;
    })();
  }

  listen () {
    this.peer.on('connection', conn => {
      conn.on('data', data => {
        // console.log('[FROM TABLE]', data);
        this.onUpdate(data);
      });
    });
  }

  open () {
    return new Promise(resolve => {
      this.peer.on('open', id => resolve(id));
    });
  }

  connect () {
    return new Promise(resolve => {
      this.conn = this.peer.connect('2xx4f6zbyeu00000');
      this.conn.on('open', () => resolve());
    });
  }

  send (data) {
    this.conn.send(data);
  }

  on (event, handler) {
    if (event === 'update') this.onUpdate = handler;
  }

  onUpdate () {}
}

class PeerService {

  async create () {
    const room = await new Room2();
    console.log('room2:', room.id);
  }

  async connect (id, updateHandler) {
    this.room = await new Room(id, updateHandler);
    // console.log('room created');
    this.room.send({"message": "Hello room!"});
    return this.room;
  }

}

export default PeerService;
