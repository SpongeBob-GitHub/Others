# Terminal
［ 终端、配置环境 ］

### 利用MAC终端，配置IOS开发环境
```
#  1、创建SSH

#  2、利用‘国内的GitHub’，实现源代码的托管

        －－好处：可以创建私有的'Repository'，管理自己的代码

#  3、搭建WebDav文件服务器(基于Apache)

#  4、Vim终端编辑器－配置(.vimrc)

#  5、Xcode中，安装CocoaPods(管理开源框架)

#  6、Git配置

#  7、终端常用命令

```

## <数据结构>


### > 数据结构

* 自引用结构
* 
```
struct list {
	int   		 data;
	struct list  *next;
} a;
```

* 线性链表
* 
```
list.h:
#include <stdio.h>
#include <stdlib.h>
typedef char DATA;			/* will use char in examples. */
struct linked_list {
	DATA				d;
	struct linked_list  *next;
};
typedef struct linked_list  ELEMENT;
typedef ELEMENT 			*LINK;
```

* 链表操作
* 
```
#include "list.h"
#include <stdlib.h>
LINK string_to_list(char s[]) 
{
	LINK		head;
	if (s[0] == '\0')		/* base case. */
		return NULL;
	else {
		head = malloc(sizeof(ELEMENT));
		head -> d = s[0];
		head -> next = string_to_list(s+1);
		return head;
	}
}
```

* 插入（insert）
* 
```
/* Inserting an element in a linked list. */
void insert(LINK p1, LINK p2, LINK q)
{
	assert(p1 -> next == p2);
	p1 -> next = q;				/* insert */
	q -> next = p2;
}
```

* 删除（delete）
* 
```
/* Recursive deletion of a list. */
void delete_list(LINK head)
{
	if (head != NULL) {
		delete_list(head -> next);
		free(head);				/* release storage */
	}
}
```


### > 二叉树

* 二叉树
* 
```
树（tree）是一种称为节点（node）的元素的有限集合。
树具有一个唯一节点（根节点）,每个节点最多具有2个子节点（左孩子、右孩子）。
叶节点、它的左右孩子节点为NULL
```

* 遍历(Traversal)
* 是指沿着某条搜索路线，依次对树中每个结点均做一次且仅做一次访问！
* 树的遍历：1、沿链表移动；2、根据下标访问，指向链表的数组元素。
* 
```
［ 通过根节点访问时间决定 ］
中序（inorder）：先访问左子树，再访问根节点
		左－>根－>右（必须递归遍历完后，再进行下一步）
前序（preorder）：先访问根节点
		根－>左－>右
后序（postorder）：访问完左右子树后，才访问根节点
		左－>右－>根
```

* Binary Tree
* 
```
/* Inorder binary tree traversal. */
void inorder (BTREE root)
{
	if (root != NULL) {
		inorder(root -> left);		/* recur left */
		printf("%c", root -> d);
		inorder(root -> right);		/* recur right */
	}
}
/* Output: A B C D E F G H I J */
```

* 前序和后序函数：
* 
```
/* Preorder and postorder binary tree traversal. */
// preorder
void preorder (BTREE root)
{
	if (root != NULL) {
		printf("%c", root -> d);
		preorder(root -> left);			/* recur left */
		preorder(root -> right);		/* recur right */
	}
}
/* Output: G D B A C F E I H J */
// preorder
void postorder (BTREE root)
{
	if (root != NULL) {
		postorder(root -> left);			/* recur left */
		postorder(root -> right);		/* recur right */
		printf("%c", root -> d);
	}
}
/* Output: A C B E F D H J I G */
```


* 创建BTREE
* 
```
/* Creating a binary tree. */
BTREE new_node(void)
{
	return (malloc(sizeof(NODE)));
}
BTREE init_node (DATA d1, BTREE p1, BTREE p2)
{
	BTREE t;
	t = new_node();
	t -> d = d1;
	t -> left = p1;
	t -> right = p2;
	return t;
}
```


### > 堆栈


* 堆栈（压入、弹出）
* 
```
堆栈、是暂时存放数据和地址，通常用来保护断点和现场；
堆，队列优先,先进先出(First-In/First-Out)；
栈，先进后出(First-In/Last-Out)。
```
* ADT Stack（堆栈）
* 
```
1、只能在一端(称为栈顶(top))对数据项进行插入和删除
2、push（压入＝＝增）、pop（弹出＝＝删）、top（取顶部元素＝＝查）、empty（判断是否为空）、full（判断是否已满）和reset（重置＝＝init）
```


### # 总结 # 

* 1 抽象数据类型（ADT）堆栈可以使用链表来实现，对它的限制在它的第一个元素（称为顶部）。堆栈具有后进先出（LIFO）的特性，这个行为是由push()和pop()函数实现。

* 2 ADT队列也可以用链表来实现，对它的访问限制在它的头部和尾部。队列具有先进先出（FIFO）的特性，这个行为是由enqueue()和dequeue()函数实现的。

* 3 当算法使用迭代方式实现时，需要使用一个迭代循环，在监测到NULL时终止。迭代算法的代价是需要使用辅助指针，但它的效率一般高于递归算法。

* 4 链表处理的标准算法用递归来实现非常自然。基本条件常常就是检测到NULL链。一般条件通过在链表结构中移动链来进行递归。

* 5 二叉树由包含两个链成员的结构来表示，它组合了线性链表的动态特征，并且可以非常快地访问树中的每个元素。二叉树的元素之间的距离通常是对数级的。

* 6 二叉树最常用使用三种遍历方法。每种访问方法是通过根节点的访问时间决定的。这三种遍历方式都可以用递归来实现，从左向右链接每棵子树。

* 7 PS：自引用结构使用指针来访问相同类型结构的地址！！最简单的自引用结构是线性链表。每个元素指向它的下一个元素，最后一个元素指向NULL。

* 8 malloc()函数用于动态内存分配。free()函数用于释放参数所指向的内存，把它返回给系统，供以后使用。

* 9 我们可以指定同时涉及链表和数组的具有可怕复杂性的数据结构。其中一个例子就是实现普通树。在普通树中，每个节点可以具有任意数量的孩子。节点的孩子由链表来表示，它由一个头元素数组所指向。

# # 编译&注释

## <编译与预处理>

## 1、使用#error和#pragma


* 使用#error
* 
```
 #if A_SIZE < B_SIZE
	#error 	"Incompatible sizes"
 #endif
```
* 使用#pragma
* 
```
 #pragma 	tokens
```

## 2、预处理

* 条件编译
* 
```
 #if 		constant_integral_expression
 #ifdef		identifier
 #endif		identifier
 .
 #undef 	identifier
 .
 #if 	0
 	more statements
 #endif
 	and still more statements
 .
 // 等于else if（if－else结构）
 #elif		constant_integral_expression
 #else		...
 #endif		...
 .
 ```
 * 自定义NSLog
 * 
 ```
 ex 1:
 // 有DEBUG这个宏，代表需要显示Log；没有时，不需要显示Log。
 #ifdef		DEBUG
 #define	MBLog(...)	NSLog(__VA_ARGS__)
 #else
 #define	MBLog(...)
 #endif
 .
 ex 2:
 #defind 	DEBUG 	1
 #if		DEBUG
 		printf 		("debug: a = %d \n", a);
 #endif
 .
 ex 3:
 ...
 #undef		PIE
 #define	PIE		"I like apple."
 ...
```

* "#" 和 "##" 的使用
* 
```
 // "#"操作符，使参数被一对‘双引号’所包围！
 // "#"使宏定义中的一个形式参数“字符串化” －－> 相当于函数“传值”
 . 
 #define 	message_for(a, b)	\
 			printf(#a " and " #b ": We love you! \n")
 int main(void)
 {
 	message_for(Carole, Debra);
 	return 0;
 }
 .
  int main(void)
 {
 	printf("Carole" " and " "Debra" ": We love you! \n");
 	return 0;
 }
 // " "被空格连接，自动拼接上去，即：Carole and Debra: We love you!
 .
 .
 // 双目操作符"##"，用于合并标记
 #define 	X(i)  x ## i
 X(1) = X(2) = X(3);
 // 预处理后
 x1 = x2 = x3;
 ```
 
 * 导入系统中的命令行“clear”
 * 
 ```
 int system(const char * string);
 int main()
 {
 	system("clear");
 	;
 	return 0;
 }
 ```
 
## 3、注释


* 使用 #error、#program、#wrong
* 
```
 #if A_SIZE < B_SIZE
	#error 	"Incompatible sizes"
 #endif
 .
 .
 #program marks - "Marks."		将方法分开（中间一根线）
 #program mark "Marks."			未分，只为了方便查找
 .
 .
 #wrong "Messages."
```
* 各种注释方式
* 
```
0 |--> iOS编码中 <--|
.
1、 /// 和 /*...*/ 都是文件注释
.
2、 // MARK:		注释
3、 // TODO: 		子注释
4、 // FIXME: 		提示修改
.
5、 // !!!:		提示 
6、 // ???:		提示
.
.
7、|--> 网页编码中 <--|
.
7.1 注释标签用于在源文档中插入注释，注释会被浏览器忽略
.<!--
.#info {
.	"Message."
.}
.-->
7.2 比较 
.<!-- comment 会包含在最终生成的html文件中 -->
.<%-- comment 则不会包含 --%>
.
.
8、|--> Terminal脚步编码 <--|
.
8.1 # Unix风格单行注释
.
8.2 " 终端配置时，注释
```
 
 
 
## <排序算法>

### 1、冒泡排序
* Buble Sort
* 
```
 #define swap(x, y) {int t; t = x; x = y; y = t;}
 .
 void swap (int *, int *);
 void bubble(int a[], int n)
 {
 	int i, j;
 	for (i = 0; i < n-1; ++i)
 		for (j = n-1; j > i; --j)
 			if (a[j-1] > a[j])
 				swap(&a[j-1], &a[j]);
 }
 .
 int a[] = {7, 3, 66, 3, -5, 22, 77, 2};
 swap(a+i, a+j);
 .
 buble(a, 8);
 .
 ex:
 1、冒泡排序效率非常低
 2、如果数组中包含n个元素，那么比较次数的复杂度：n * n
 3、使用“归并”排序，高效率，复杂度：n log n
```


### 2、归并排序
* Merge Sort
* 
```
 mergeSort.h:
 #include <assert.h>
 #include <stdio.h>
 #include <stdlib.h>
 void merge (int a[], int b[], int c[], int m, int n);
 void mergesort (int key[], int n);
 void wrt (int key[], int sz);
 .
 .
 merge.c:
 /* Merge a[] of size m and b[] of size n into c[]. */
 #include "mergesort.h"
 void merge (int a[], int b[], int c[], int m, int n)
 {
 	int i = 0, j = 0, k = 0;
 	;
 	while (i < m && j < n)
 		if (a[i] < b[j])
 			c[k++] = a[i++];
 		else
 			c[k++] = b[j++];
 	;
 	while (i < m)				/* pick up any remainder */
 		c[k++] = a[i++];
 	;
 	while (j < n)
 		c[k++] = b[j++];
 }
 .
 .
 mergesort.c:
 /* Mergesort: Use merge() to sort an array of size n. */
 #include "mergesort.h"
 void mergesort (int key[], int n)
 {
 	int j, k, m, *w;
 	for (m = 1; m < n; m *= 2)
 	;							/* m is a power of 2 */
 	if (n < m) {
 		printf("ERROR: Array size not a power of 2 - bye! \n");
 		exit(1);
 	}
 	w = calloc (n, sizeof(int)); 	/* allocate workspace */
 	assert(w != NULL);				/* check that calloc() worked */
 	for (k = 1; k < n; k *=2)
 	{
 		for (j = 0; j < n-k; j += 2*k)
 			/* Merge two subarrays of key[] into a subarray of w[]. */
 			merge(key + j, key+j+k, w+j, k, k)
 		for (j = 0; j < n; ++j)
 			key[j] = w[j];			/* write w back into key */
 	}
 	free(w);						/* free the workspace */
 }
 .
 .
 main.c:
 /* Test merge() and mergesort(). */
 #include "mergesort.h"
 int main(void)
 {
 	int sz, key[] = { 4, 3, 1, 67, 55, 8, 0, 4,
 					  -5, 37, 7, 4, 2, 9, 1, -1
 					};
 	sz = sizeof(key) / sizeof(int); /* the size of key[] */
 	printf("Before mergesort:\n");
 	wrt(key, sz);
 	mergesort(key, sz);
 	printf("After mergesort:\n");
 	wrt(key, sz);
 	return 0;
 }
 .
 .
 wrt.c:
 #include "mergesort.h"
 void wrt(int key[], int sz)
 {
 	int i;
 	for (i = 0; i < sz; ++i)
 		printf("%4d %s", key[i], ((i < sz-1) ? " " : "\n"));
 }
```

### 3、快速排序
* Quick Sort
* 
```
/* Quicksort! Pointer version with macros. */
 #define swap(x, y) {int t; t = x; x = y; y = t;}
 #define order(x, y) if (x > y) swap(x, y)
 #define o2(x, y) order(x, y)
 #define o3(x, y, z) o2(x, y); o2(x, z); ow(y, z)
 #typedef enum {yes, no} yes_no;
 static yes_no find_pivot(int *left, int *right, int *pivot_ptr);
 static int		*partition(int *left, int *right, int pivot);
 .
 .
 .//利用“递归”实现，基本思路：“分治法” quicksort(a, a+N-1);
 void quicksort(int *left, int *right)
 {
 	int *p, pivot;
 	if (find_pivot(left, right, &pivot) == yes) {
 		p = partition(left, right, pivot);
 		quicksort(left, p-1);
 		quicksort(p, right);
 	}
 }
 .
 .
 static yes_no find_pivot(int *left, int *right, int *pivot_ptr)
 {
 	int a, b, c, *p;
 	a = *left;								/* left value */
 	b = *(left + (right - left) / 2);		/* middle value */
 	c = *right;
 	;
 	o3(a, b, c);
 	if (a < b) {
 		*pivot_ptr = b;
 		return yes;
 	}
 	if (b < c) {
 		*pivot_ptr = c;
 		return yes;
 	}
 	;
 	for (p = left+1; p <= right; ++p)
 		if (*p != *left) {
 			*pivot_ptr = (*p < *left) ? *left : *p;
 			return yes;
 		}
 	return no;				/* all elements have the same value */
 }
 .
 .
 .// 主要工作由partation()函数完成
 static int *partation(int *left, int *right, int pivot)
 {
 	while (left <= right) {
 		while (*left < pivot)
 			++left;
 		while (*right >= pivot)
 			--right;
 		if (left < right) {
 			swap(*left, *right);
 			++left;
 			--right;
 		}
 	}
 	return left;
 }
 .
 .
 ex:
 1、使用“快速”排序，高效率，复杂度：n log n
```
