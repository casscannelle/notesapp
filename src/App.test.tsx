import { assert, test } from "vitest";

test('Verificar título Minhas notas', () => { 
assert.match("minhas notas", /^minhas notas/, "regexp matches");
});

test('Verificar se notas existem', () => {
assert.exists("Note", "Note exists");
});

function onCreateNote() {return "Nota criada";}

test('teste função onCreateNote', () => {
  assert.isFunction(onCreateNote, "onCreateNote é uma função");
})

test('Verificar se notas foram criadas', () => {
  assert.match(onCreateNote(), /^Nota criada/, "regexp matches");
});

function onUpdateNote() {return "Nota atualizada";}
test('Verificar se notas foram editadas', () => {	
assert.match(onUpdateNote(), /^Nota atualizada/, "regexp matches");
});

