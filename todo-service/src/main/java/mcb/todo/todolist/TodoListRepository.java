package mcb.todo.todolist;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {
    @Override
    <S extends TodoList> S save(S s);

    @Override
    <S extends TodoList> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<TodoList> findById(Long aLong);

    @Override
    boolean existsById(Long aLong);

    @Override
    Iterable<TodoList> findAll();

    @Override
    Iterable<TodoList> findAllById(Iterable<Long> iterable);

    @Override
    long count();

    @Override
    void deleteById(Long aLong);

    @Override
    void delete(TodoList todoList);

    @Override
    void deleteAll(Iterable<? extends TodoList> iterable);

    @Override
    void deleteAll();
}
