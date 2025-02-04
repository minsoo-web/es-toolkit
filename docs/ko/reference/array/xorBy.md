# xorBy

`mapper` 함수가 반환하는 값을 기준으로, 두 배열의 대칭 차집합을 반환해요.

이 함수는 파라미터로 두 개의 배열과 `mapper` 함수를 받아요. 
`mapper` 함수로 두 배열의 요소들을 변환했을 때, 두 배열 중 하나에는 있지만 교집합에는 없는 요소들로 이루어진 새 배열을 반환해요.

## 인터페이스

```typescript
function xorBy<T, U>(arr1: T[], arr2: T[], mapper: (item: T) => U): T[];
```

### 파라미터

- `arr1` (`T[]`): 첫 번째 배열이에요.
- `arr2` (`T[]`): 두 번째 배열이에요.
- `mapper` (`(item: T) => U`): 비교하기 위해 요소를 새로운 값으로 변환할 함수.

### 반환 값

(`T[]`): `mapper`가 반환한 값에 따라 `arr1` 또는 `arr2`에 있지만 둘 다에는 없는 요소들을 포함하는 배열이에요.

## 예시

```typescript
xorBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], x => x.id);
// [{ id: 1 }, { id: 3 }]를 반환해요.
```
