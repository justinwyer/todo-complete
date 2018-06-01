package mcb.todo.todolist;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TodoItem {
    @Id
    @GeneratedValue
    private Long id;

    private String description;

    private Boolean completed;

    protected TodoItem() {
    }

    public TodoItem(String description) {
        this.description = description;
        this.completed = false;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Boolean getCompleted() {
        return completed;
    }
}
