class UserCompany extends React.Component {
  state = {
    company: undefined,
    loaded: false
  };

  componentDidMount() {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data: {
        query: `{
          user(login: "${this.props.username}") {
            company
          }
        }`
      },
      headers: {
        Authorization: `bearer token`
      }
    }).then(response => {
      this.setState({
        loaded: true,
        company: response.data.data.user.company
      });
    });
  }

  render() {
    if (this.state.loaded) {
      return this.state.company || 'Unknown';
    }

    return '...';
  }
}

const username = 'kentcdodds';
const element = (
  <div>
    <div>
      {`@${username} works at `}
      <UserCompany username={username} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
