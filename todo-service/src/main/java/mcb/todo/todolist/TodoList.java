package mcb.todo.todolist;

import javax.persistence.*;
import java.util.List;

@Entity
public class TodoList {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<TodoItem> items;

    protected TodoList() {
    }

    public TodoList(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<TodoItem> getItems() {
        return items;
    }

    public TodoItem addItem(String description) {
        var item = new TodoItem(description);
        items.add(item);
        return item;
    }
}
