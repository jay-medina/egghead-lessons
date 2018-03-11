// tslint:disable:no-shadowed-variable
import React from 'react';
import ReactDOM from 'react-dom';

interface Model {
  shelves: number;
  username: string;
}

type Increment = { quantity: number };
type Decrement = {};
type Action = Increment | Decrement;
type PluralizeShelves = (quantity: number) => string;

interface ShelfButtonProps {
  caption: string;
  action: () => void;
}

interface ViewProps {
  model: Model;
  dispatch: (action: Action) => () => void;
}

// UPDATE
const isIncrement = (action: Action): action is Increment => {
  return typeof (action as Increment).quantity === 'number';
};

const update = (action: Action, model: Model): Model => {
  if (isIncrement(action)) {
    return {
      ...model,
      shelves: model.shelves + action.quantity,
    };
  } else {
    return {
      ...model,
      shelves: Math.max(0, model.shelves - 1),
    };
  }
};

// VIEW
const pluralize = (singular: string, plural: string) => (quantity: number) =>
  quantity === 1 ? singular : plural;

const pluralizeShelves: PluralizeShelves = pluralize('shelf', 'shelves');

/**
 *
 */

function ShelfButton({ caption, action }: ShelfButtonProps) {
  return <button onClick={action}>{caption}</button>;
}
/**
 *
 */

const View: React.SFC<ViewProps> = ({ dispatch, model }) => {
  const caption = model.shelves + ' ' + pluralizeShelves(model.shelves);

  return (
    <div className="content" id="main-body">
      <h1>Pluralizer</h1>
      <div>
        <ShelfButton caption="Add a shelf" action={dispatch({ quantity: 10 })} />
        <ShelfButton caption="Explode a shelf" action={dispatch({})} />
        {caption}
      </div>
    </div>
  );
};

interface AppProps {
  view: React.StatelessComponent<ViewProps>;
  update: (action: Action, model: Model) => Model;
  model: Model;
}

interface AppState {
  model: Model;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      model: props.model,
    };
  }

  public render() {
    const { model } = this.state;
    return this.props.view({ model, dispatch: this.dispatch });
  }

  private dispatch = (action: Action) => {
    return () => {
      const newModel = this.props.update(action, this.props.model);
      this.setState({ model: newModel });
    };
  }
}

const model: Model = {
  shelves: 3,
  username: 'jomedina',
};

ReactDOM.render(<App model={model} view={View} update={update} />, document.getElementById(''));
