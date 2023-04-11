class Board extends React.Component {
    constructor(props) {
      super(props);
      const clients = this.getClients();
      this.state = {
        clients: {
          backlog: clients.filter(client => !client.status || client.status === 'backlog'),
          inProgress: clients.filter(client => client.status && client.status === 'in-progress'),
          complete: clients.filter(client => client.status && client.status === 'complete'),
        }
      }
      this.swimlanes = {
        backlog: React.createRef(),
        inProgress: React.createRef(),
        complete: React.createRef(),
      }
    }
  
    componentDidMount() {
      Dragula([
        this.swimlanes.backlog.current,
        this.swimlanes.inProgress.current,
        this.swimlanes.complete.current
      ]).on('drop', (el, target, source) => {
        const newStatus = target.dataset.status;
        const id = el.dataset.id;
        const client = this.state.clients[source.dataset.status].find(client => client.id === id);
        client.status = newStatus;
        this.setState(prevState => {
          const clients = { ...prevState.clients };
          clients[newStatus] = [...clients[newStatus], client];
          clients[source.dataset.status] = clients[source.dataset.status].filter(client => client.id !== id);
          return { clients };
        });
      });
    }
  
    getClients() {
      return [
        ['1','Stark, White and Abbott','Cloned Optimal Architecture', 'in-progress'],
        ['2','Wiza LLC','Exclusive Bandwidth-Monitored Implementation', 'complete'],
        ['3','Nolan LLC','Vision-Oriented 4Thgeneration Graphicaluserinterface', 'backlog'],
        ['4','Thompson PLC','Streamlined Regional Knowledgeuser', 'in-progress'],
        ['5','Walker-Williamson','Team-Oriented 6Thgeneration Matrix', 'in-progress'],
        ['6','Boehm and Sons','Automated Systematic Paradigm', 'backlog'],
        ['7','Runolfsson, Hegmann and Block','Integrated Transitional Strategy', 'backlog'],
        ['8','Schumm-Labadie','Operative Heuristic Challenge', 'backlog'],
        ['9','Kohler Group','Re-Contextualized Multi-Tasking Attitude', 'backlog'],
        ['10','Romaguera Inc','Managed Foreground Toolset', 'back
  
  
  