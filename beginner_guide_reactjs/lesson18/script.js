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
        Authorization: `bearer 990653032875d8c6ff6cf2d37b3b2905dfe2181f`
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
