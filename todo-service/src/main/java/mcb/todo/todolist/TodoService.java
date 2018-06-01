package mcb.todo.todolist;

import mcb.todo.todolist.restmodel.CreateTodoItemRequest;
import mcb.todo.todolist.restmodel.CreateTodoListRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.text.MessageFormat;

@Controller
@RequestMapping("/todos")
@CrossOrigin
public class TodoService {
    private TodoListRepository repository;

    @Autowired
    public TodoService(TodoListRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Mono<ResponseEntity> createTodoList(@RequestBody Mono<CreateTodoListRequest> request) {
        return request.map(r -> this.repository.save(new TodoList(r.getName())))
                .map(TodoList::getId)
                .map(id -> ResponseEntity.created(URI.create("/todos/" + id)).build());
    }

    @GetMapping
    public ResponseEntity fetchTodoList() {
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping
    @RequestMapping("/{todoListId}/items")
    public ResponseEntity createTodoList(@PathVariable Long todoListId, @RequestBody CreateTodoItemRequest request) {
        var list = this.repository.findById(todoListId).get();
        var item = list.addItem(request.getDescription());
        repository.save(list);
        return ResponseEntity.created(URI.create(MessageFormat.format("/todos/{0}/items/{1}", list.getId(), item.getId()))).build();
    }
}