import * as React from 'react';
import { observer } from 'mobx-react';
// import { action, observable, computed } from 'mobx';
import { Header } from './Header';

@observer
export class TodoListView extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <div>
                <Header store={store} />
                <ul>
                    {store.todos.map(todo => (
                        <li key={todo.id}>
                            <input
                                id={`input-${todo.id}`}
                                type="checkbox"
                                checked={todo.done}
                                onClick={todo.toggle.bind(todo)}
                            />
                            <label htmlFor={`input-${todo.id}`}>{todo.title}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
