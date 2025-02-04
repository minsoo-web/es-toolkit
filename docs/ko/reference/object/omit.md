# omit

특정 키를 생략한 새로운 객체를 생성해요.

이 함수는 객체와 키 배열을 받아, 지정된 키에 해당하는 프로퍼티를 제외한 새로운 객체를 반환해요.

## 인터페이스

```typescript
function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
```

### 파라미터 

- `obj` (`T`): 키를 생략할 객체예요.
- `keys` (`K[]`): 객체에서 생략할 키들의 배열이에요.

### 반환 값

(`Omit<T, K>`): 지정된 키들이 생략된 새로운 객체예요.

## 예시

```typescript
const obj = { a: 1, b: 2, c: 3 };
const result = omit(obj, ['b', 'c']);
// 결과는 다음과 같아요 { a: 1 }
```
