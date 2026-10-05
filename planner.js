const P = (id, name, level = "Medium") => ({ id, name, level });
const Q = (id, name, topic, difficulty, slug) => ({ id, name, topic, difficulty, slug: slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") });
const D = (title, goal, why, problems, actions, done) => ({ title, goal, why, problems, actions, done });
const W = (title, category, summary, outcome, checkpoint, coach, days) => ({ title, category, summary, outcome, checkpoint, coach, days });

const weeks = [
  W("Recursion: first principles", "RECURSION", "Aaj recursion ka flow pakdo: call kab rukti hai, chhota input kaise banta hai, aur answer wapas kaise aata hai.", "Base case likh pao, har call mein progress dikhe, aur return value ka flow samjha pao.", "Har problem mein batao: input kya hai, rukna kab hai, next chhota call kya hai, aur return ke baad kya hoga.", "Recursive call ko chhote input ke liye helper samjho. Pehle paper par trace, phir code.", [
    D("Read a call stack", "n = 3 ke liye 3 se 1 aur 1 se 3 print karne ka dry run karo.", "Call se pehle print karoge toh numbers neeche jaate hue print honge; call ke baad print karoge toh wapas aate waqt.", [], ["n=3 se n=0 tak calls paper par likho.", "Har call ke saamne likho: abhi chal rahi hai ya child call ka wait kar rahi hai?", "Print ko call ke pehle aur baad rakhkar output predict karo."], "Bina code chalaye dono outputs bata pao."),
    D("Base case + progress", "Factorial aur 1 se n tak sum likho; pehle smallest input se start karo.", "Base case seedha answer deta hai. Har agla call input ko us base case ke kareeb le jaata hai.", [], ["n=0 par answer kya hai, pehle likho.", "Factorial ke liye socho: n! = n × (n-1)!.", "n=0, n=1, aur n=4 ko dry-run karke verify karo."], "Base case par function rukta hai aur har call input chhota karta hai."),
    D("Return values", "Child call ka answer use karke current call ka answer banao.", "fib(4) ko fib(3)+fib(2) chahiye, isliye fib(4) wait karta hai. fib(0) ya fib(1) par seedha answer milta hai; phir values wapas upar aati hain aur add hoti hain.", [P(509, "Fibonacci Number", "Easy"), P(50, "Pow(x, n)", "Medium")], ["fib(4) ka tree banao: fib(3)+fib(2); fib(3) ko bhi expand karo.", "pow(2,3) ko 2 × pow(2,2) ki tarah likho.", "Dono trees compare karo: Fibonacci mein repeated branches hain, power mein ek hi chain."], "Samjha pao ki child ka return parent ke answer mein kahan use hota hai."),
    D("State in parameters", "Sum ke partial answer ko parameters mein pass karo; phir return-value version se compare karo.", "Parameter current progress ko carry karta hai. Return value chhote problem ka final answer laati hai.", [], ["Har parameter ka meaning Hindi mein likho.", "n=3 ke liye n aur partialSum har call ke saath trace karo.", "Dono versions likhkar dekho answer kab banta hai."], "Har call ko pata ho ki uska input aur current progress kya hai."),
    D("Recursion debug lab", "Missing base case ya unchanged input ko trace se pakdo.", "Agar input base case ki taraf move nahi karega, function ruk nahi paayega.", [P(231, "Power of Two", "Easy"), P(326, "Power of Three", "Easy")], ["Har call mein changing input temporarily print karo.", "Zero aur smallest valid input test karo.", "Ek power-check question attempt karo, phir debug print hatao."], "Pata laga pao kaunsi call base case ki taraf progress nahi kar rahi thi.")
  ]),
  W("Recursion on arrays & strings", "RECURSION", "Turn the input position into explicit state. Practice shrinking from one side and from both ends.", "You can define what an index means and ensure each call advances or moves inward.", "Write the meaning of the index and explain why each recursive call is smaller.", "If the same element is processed repeatedly, inspect the index passed to the next call.", [
    D("Array index state", "Recursively compute an array sum and maximum.", "The index says which part of the array remains unprocessed.", [], ["Define index as the first unprocessed position.", "Set the base case at index == size.", "Test empty, one-item, and mixed arrays."], "The function handles empty input and visits each element once."),
    D("Two ends move inward", "Reverse an array recursively with left and right indices.", "The middle is already correct once the pointers meet or cross.", [], ["Write the invariant: outside positions are already reversed.", "Swap endpoints, then move both inward.", "Test lengths 0, 1, 4, and 5."], "Odd- and even-length arrays both stop correctly."),
    D("Palindrome recursion", "Compare characters from both ends and move inward.", "Only the unverified middle remains after each matching pair.", [P(125, "Valid Palindrome", "Easy"), P(344, "Reverse String", "Easy")], ["First solve the clean lowercase-only version.", "Add pointer movement and a crossing base case.", "Then account for the actual problem's character rules."], "You can state which character pairs have been verified."),
    D("Recursive trace practice", "Trace a recursive array function by hand before coding it.", "A trace table exposes incorrect indices and off-by-one base cases early.", [], ["Use an array of three values and list each call's index.", "Write the return value beside each call as it unwinds.", "Change one input and predict the result before compiling."], "Your trace and program output agree on boundary cases."),
    D("Array recursion review", "Rebuild one function from memory and explain its contract.", "Remembering the contract is more useful than memorizing a code template.", [P(344, "Reverse String", "Easy")], ["Write sum or reverse from a blank file.", "Say what each call is responsible for.", "Test one empty/small case and one ordinary case."], "You can implement without looking at your previous solution.")
  ]),
  W("Subsequences & combinations", "BACKTRACKING", "At every position, decide whether to choose or skip. Keep track of state and undo each choice before exploring its sibling.", "You can draw a decision tree and generate unique subsets or combinations.", "Before coding: list the choices, state, base case, and exactly what must be undone.", "Your current path is temporary state. Push before exploring; pop when that branch returns.", [
    D("Choose / skip tree", "Draw and implement all subsets of [1,2,3].", "Each value is considered once along a path, creating two branches.", [P(78, "Subsets")], ["Draw the two branches for the first value.", "At the leaf, copy the current path into the answer.", "Check that the result contains 2^n subsets."], "The empty subset is included and the input path is restored."),
    D("Backtracking state", "Observe push, recurse, and pop with a trace print.", "Backtracking reuses one path vector across many branches.", [P(78, "Subsets")], ["Print the path at each leaf for a tiny input.", "Print again after returning from each call.", "Remove the pop and predict the bug, then restore it."], "You can explain why pop_back is necessary."),
    D("Duplicate subsets", "Generate each distinct subset once when input has repeated values.", "Sorting makes equal choices adjacent so equivalent sibling branches can be skipped.", [P(90, "Subsets II")], ["Sort the input.", "Skip a duplicate only when it is a sibling choice at this depth.", "Check [1,2,2] and compare with the expected unique results."], "Equal values may both be chosen, but duplicate result paths are skipped."),
    D("Combination sum", "Choose candidates until the remaining target reaches zero.", "The state needs a start index and remaining target; reusable choices stay at the same index.", [P(39, "Combination Sum")], ["Write what startIndex and remainingTarget mean.", "Handle target == 0 and target < 0.", "Trace [2,3,6,7], target 7 before coding."], "You can explain why the reuse branch does not advance its index."),
    D("One-use combinations", "Use each input position once and avoid duplicate combinations.", "Advancing the index prevents reuse; sibling duplicate skipping prevents repeated paths.", [P(40, "Combination Sum II")], ["Sort values and draw one recursion level.", "Advance after choosing a candidate.", "Test repeated inputs such as [1,1,2]."], "You can contrast reuse and no-reuse versions clearly.")
  ]),
  W("Permutations & backtracking", "BACKTRACKING", "Order matters now: track which items are already on the current path. Add validity rules and prune choices that cannot work.", "You can track used values, handle duplicates, and restore board/path state.", "Explain why a value is or is not available at a particular depth of the recursion tree.", "A used array describes the current path, not the whole search. Undo it when returning.", [
    D("Permutations", "Generate every ordering of distinct values.", "At every depth, one unused value becomes the next item.", [P(46, "Permutations")], ["Draw the tree for [1,2,3].", "Mark a value used before the recursive call.", "Undo both path and used state afterward."], "Every permutation uses each value once and appears once."),
    D("Unique permutations", "Handle repeated values without duplicate output.", "Sorted equal values need a rule that distinguishes siblings from a continued choice.", [P(47, "Permutations II")], ["Sort input.", "Trace [1,1,2] through the duplicate condition.", "Verify exactly three unique results."], "You can explain the previous-equal-and-unused condition."),
    D("Choose k values", "Generate combinations without reordering duplicates.", "A start index avoids exploring the same set in multiple orders.", [P(77, "Combinations"), P(216, "Combination Sum III")], ["Stop when path length reaches k.", "Prune when too few candidates remain.", "Test the smallest and largest allowed k."], "You can explain how the start index removes reordered results."),
    D("Build strings by choice", "Construct strings one character at a time from allowed choices.", "The path itself stores the partial answer; validity may constrain which choices are legal.", [P(17, "Letter Combinations of a Phone Number"), P(22, "Generate Parentheses")], ["Map one digit to its choice list.", "Recurse once for each available character.", "For parentheses, track open/close counts and reject invalid prefixes."], "Every generated string follows the problem's constraints."),
    D("Grid search & pruning", "Search neighboring cells while preventing reuse on the active path.", "Mark-and-restore lets different branches reuse the same board cell safely.", [P(79, "Word Search"), P(51, "N-Queens", "Hard")], ["Define state as row, column, and matched character index.", "Add bounds, mismatch, and already-used checks.", "Attempt Word Search; use N-Queens as a stretch only after the trace is clear."], "You can explain which choices are pruned and why.")
  ]),
  W("Bit manipulation", "BIT MANIPULATION", "Make binary state visible. Learn operators, XOR cancellation, masks, and counting set bits before advanced tricks.", "You can work through a bit expression on paper and justify its edge cases.", "Explain AND, OR, XOR, shifts, and a mask using a small binary example.", "Write the bits next to the expression. Do not trust a trick you cannot derive.", [
    D("Binary operators", "Practice AND, OR, XOR, shifts, and set-bit checks.", "The truth table is the simplest way to understand an unfamiliar bit expression.", [P(191, "Number of 1 Bits", "Easy")], ["Write truth tables for &, |, and ^.", "Trace left/right shifts on small positive integers.", "Implement set-bit counting."], "You can calculate sample expressions without running them."),
    D("XOR cancellation", "Find a unique item among pairs using XOR.", "Equal values cancel and the aggregation is order-independent.", [P(136, "Single Number", "Easy"), P(260, "Single Number III")], ["Verify x^x=0 and x^0=x in binary.", "Solve Single Number in constant extra space.", "Study how a differing bit separates two unique values."], "You can explain every XOR step, not just cite the trick."),
    D("Masks & power of two", "Check a bit and use n & (n-1) to remove the lowest set bit.", "A power of two has exactly one set bit, except zero has none.", [P(231, "Power of Two", "Easy"), P(338, "Counting Bits", "Easy")], ["Trace masks for values 0 through 8.", "Handle zero before checking power of two.", "Derive the bit-count recurrence for Counting Bits."], "The zero edge case is handled correctly."),
    D("Bitmask as a set", "Represent a small subset with an integer mask.", "Each bit position records whether its corresponding item is present.", [], ["List all masks for a 3-element set.", "Decode the selected elements of each mask.", "Estimate when 2^n enumeration is practical."], "You can convert between a small subset and its mask."),
    D("Bit review", "Re-solve two bit problems and explain signedness assumptions.", "A trace with concrete bits catches operator-precedence and boundary mistakes.", [P(136, "Single Number", "Easy"), P(191, "Number of 1 Bits", "Easy")], ["Recall operators without notes.", "Re-solve one XOR and one count problem.", "Test zero and explain any signed integer assumptions."], "You can derive the core operation from the bit pattern.")
  ]),
  W("Stack & queue foundations", "STACKS + QUEUES", "Choose a container by the order in which pending work must be processed. Practice implementation and nested matching.", "You can implement core operations and explain whether newest or oldest work is handled first.", "Give the invariant and one use case for a stack, queue, and deque.", "A stack often stores unfinished work. Ask which item must be resumed first.", [
    D("Stack contract", "Implement push, pop, top, and empty; then use a stack for matching.", "The newest unmatched opener must be checked first.", [P(20, "Valid Parentheses", "Easy"), P(155, "Min Stack")], ["Write operation contracts and empty behavior.", "Trace nested parentheses by hand.", "Solve Valid Parentheses, then identify extra Min Stack state."], "You can justify why a stack fits nested matching."),
    D("Queue & deque", "Implement FIFO behavior and compare it with a stack.", "The oldest pending item is processed first; deque allows operations at both ends.", [P(232, "Implement Queue using Stacks", "Easy"), P(225, "Implement Stack using Queues", "Easy")], ["Trace enqueue/dequeue on three values.", "Implement a queue using a deque.", "Attempt one conversion problem and state its costly operation."], "The operation order is correct under alternating calls."),
    D("Nested parsing", "Use push/pop events to process nested structure.", "The matching close token relates to the most recent unmatched open token.", [P(20, "Valid Parentheses", "Easy"), P(71, "Simplify Path")], ["List what causes a push and a pop.", "Test nested, adjacent, and invalid examples.", "Attempt a path or bracket parsing problem."], "You can identify the stored state needed to match a token."),
    D("Queue as pending work", "Process items level by level using a queue.", "Queue order is useful when all current-distance work must finish before farther work.", [P(622, "Design Circular Queue")], ["Draw front/rear movement including wraparound.", "Define empty and full states.", "Test wraparound and one-slot capacity."], "You can distinguish full from empty in the chosen representation."),
    D("Stack/queue review", "Choose a structure from the processing order in a new prompt.", "The data structure should encode the order that would otherwise be managed manually.", [P(20, "Valid Parentheses", "Easy"), P(232, "Implement Queue using Stacks", "Easy")], ["Classify each prompt as LIFO, FIFO, or both ends.", "Re-solve one implementation problem.", "Write complexity for every operation."], "You can explain why the structure matches the required order.")
  ]),
  W("Monotonic stack & deque", "STACKS + QUEUES", "Keep unresolved candidates in a useful order. Each index should enter and leave the structure only a bounded number of times.", "You can state the monotonic invariant and explain what each pop proves.", "For next-greater or histogram problems, explain what becomes known when an index is popped.", "Say 'decreasing by value' or 'increasing by value' precisely, and track indices when distance matters.", [
    D("Next greater element", "Resolve an item's next greater value when a larger value arrives.", "The stack holds indices that are still waiting for a greater value.", [P(496, "Next Greater Element I", "Easy")], ["Write the O(n^2) baseline.", "Trace stack indices on a small array.", "When a larger value arrives, pop and assign its answer."], "Each index is pushed and popped at most once."),
    D("Circular next greater", "Handle wraparound without duplicating the output.", "Two virtual passes let unresolved positions see values after the array end.", [P(503, "Next Greater Element II")], ["Trace [1,2,1] by hand.", "Use modulo indexing or a doubled scan.", "Ensure answers do not compare an index with itself."], "Circular results match a manual scan."),
    D("Daily temperatures", "Convert next-warmer-day into next-greater index distance.", "Indices provide both the pending value and how many days were waited.", [P(739, "Daily Temperatures")], ["Trace values and unresolved indices.", "On a warmer day, pop and compute index difference.", "Test a decreasing list and equal values."], "The answer is zero when no warmer day exists."),
    D("Histogram boundaries", "Find each bar's maximal width using smaller neighbors.", "When a bar is popped, the current index is its right boundary and the new top is its left boundary.", [P(84, "Largest Rectangle in Histogram", "Hard")], ["Draw bars and boundaries for [2,1,5,6,2,3].", "Derive width = right - left - 1.", "Attempt implementation after tracing the final stack flush."], "You can derive width and height without memorizing a formula."),
    D("Monotonic review", "Explain and re-solve a monotonic stack pattern.", "A structure is useful when popped candidates are permanently dominated or resolved.", [P(496, "Next Greater Element I", "Easy"), P(739, "Daily Temperatures")], ["Write the stack invariant from memory.", "Re-solve one next-greater problem.", "Explain the amortized O(n) argument."], "You can justify each pop in plain language.")
  ]),
  W("Two pointers & sliding window", "WINDOWS", "Move boundaries while maintaining a stated condition. Learn when discarding the left side is safe.", "You can recognize fixed-size, variable-size, and opposing-pointer patterns.", "Explain the invariant that remains true after every pointer movement.", "A window is not automatically valid just because two pointers move. Identify why a removed prefix cannot help.", [
    D("Opposing pointers", "Solve pair sum in a sorted array and understand pointer movement.", "Sorted order tells which side can be discarded without losing a solution.", [P(167, "Two Sum II - Input Array Is Sorted", "Medium"), P(11, "Container With Most Water", "Medium")], ["Trace low/high pointers on a small sorted array.", "Write the movement rule before coding.", "For container area, explain why moving the shorter side is useful."], "You can justify every pointer move."),
    D("Fixed-size window", "Maintain a running sum as one element enters and one leaves.", "Updating state is cheaper than recomputing every window from scratch.", [P(643, "Maximum Average Subarray I", "Easy")], ["Compute the first window sum.", "Slide by adding the new value and removing the old one.", "Test k=1 and k=array length."], "Each element enters and leaves the running state once."),
    D("Variable-size window", "Expand until valid and shrink while the condition still holds.", "For positive values, enlarging increases sum and shrinking decreases it predictably.", [P(209, "Minimum Size Subarray Sum", "Medium")], ["Define the validity condition precisely.", "Trace expand/shrink operations.", "Explain why negative values would break this simple approach."], "You can identify the positive-number assumption."),
    D("Window with frequency", "Track characters as the window grows and shrinks.", "Frequency state lets you test whether a substring satisfies the rule.", [P(3, "Longest Substring Without Repeating Characters"), P(567, "Permutation in String")], ["Define what 'valid window' means.", "Update counts on both add and remove.", "Attempt LC 3; test repeats at the left boundary."], "Your invariant is true at the point where the answer is recorded."),
    D("Pattern selection review", "Classify a prompt before writing pointer code.", "Different pointer patterns rely on different monotonic properties.", [P(15, "3Sum"), P(424, "Longest Repeating Character Replacement")], ["Classify fixed window, variable window, or opposing pointers.", "Re-solve a two-pointer or window problem.", "Write the invariant and complexity before checking the editorial."], "You select a pattern for a reason, not by keywords alone.")
  ]),
  W("Heaps & priority queues", "HEAPS", "Keep the most useful extreme available while items arrive. A heap gives a fast root, not a fully sorted collection.", "You can choose min-heap/max-heap, control its size, and explain operation costs.", "State what the heap root represents in every problem you solve.", "Do not say a heap is sorted. Only its root is guaranteed to be the minimum or maximum.", [
    D("Heap operations in C++", "Use priority_queue as a min-heap and max-heap.", "The ordering rule determines which value stays at the root.", [P(703, "Kth Largest Element in a Stream", "Easy")], ["Draw a heap as both tree and array.", "Write C++ min-heap syntax from memory.", "Trace top, push, and pop."], "You know O(1) top and O(log n) insertion/removal."),
    D("Kth largest", "Keep only k candidates in a min-heap.", "The root is the smallest among the retained k largest values.", [P(215, "Kth Largest Element in an Array")], ["Compare full sorting with size-k heap.", "Trace heap size after each insertion.", "Test k=1 and k=n."], "The heap never grows beyond k elements."),
    D("Top K frequency", "Count first, then keep or extract the most frequent values.", "A heap can order by frequency; ties need no special rule unless the prompt requires one.", [P(347, "Top K Frequent Elements")], ["Build a frequency map.", "Choose heap ordering and define the root.", "Check a case with equal frequencies."], "You can explain the time/space tradeoff against sorting."),
    D("Merge sorted lists", "Repeatedly take the smallest current list head.", "Only one active head per list is needed to choose the next global minimum.", [P(23, "Merge k Sorted Lists", "Hard")], ["Trace three short sorted lists.", "Store enough identity to push the popped node's successor.", "Test empty lists and a single list."], "Every node is pushed and removed a bounded number of times."),
    D("Heap review", "Choose a heap when repeated extreme retrieval is central.", "Sorting is simpler once; a heap is useful when data changes or only top-k matters.", [P(215, "Kth Largest Element in an Array"), P(703, "Kth Largest Element in a Stream", "Easy")], ["Re-solve one top-k problem.", "State what the root means before each operation.", "Compare complexity with sorting."], "You can defend using a heap instead of defaulting to it.")
  ]),
  W("Greedy algorithms", "GREEDY", "Make a local choice only after testing why it preserves an optimal solution. Sort, maintain a frontier, or grow a valid interval.", "You can state a greedy rule and give its proof idea or counterexample.", "Explain why earlier choices can be replaced or why the current choice preserves the best possible future.", "Passing examples does not prove a greedy rule. Try a counterexample before trusting it.", [
    D("Sort and assign", "Match the smallest sufficient resource to the smallest need.", "An exchange argument shows that wasting a larger resource cannot improve the number served.", [P(455, "Assign Cookies", "Easy")], ["Write the brute-force pairing idea.", "Sort both arrays and justify the greedy match.", "Test when one side is empty."], "You can explain why the sorted pairing is safe."),
    D("Reachability frontier", "Track the farthest position reachable so far.", "Once the frontier reaches the final index, earlier choices need not be revisited.", [P(55, "Jump Game")], ["Draw reachable ranges for a short array.", "Update the farthest reachable index.", "Test a zero that blocks progress."], "You can state when the scan can stop early."),
    D("Minimum jumps", "Expand a reachable range as one jump layer at a time.", "The current range is like a BFS frontier; the next boundary determines the next jump.", [P(45, "Jump Game II")], ["Trace current and next frontier.", "Increment jumps only when the current range ends.", "Compare with the simpler reachability problem."], "You can distinguish reachability from minimum number of jumps."),
    D("Intervals", "Sort and merge ranges or remove the interval that blocks most future choices.", "The endpoint summarizes which part of the timeline is already covered.", [P(56, "Merge Intervals"), P(435, "Non-overlapping Intervals")], ["Draw overlap and touching-boundary cases.", "Choose the sort key and explain why.", "Implement one interval problem and test nested ranges."], "You handle exact endpoint equality according to the prompt."),
    D("Greedy review", "Re-solve one reachability and one interval problem; defend the rule.", "Greedy reasoning is a proof about future choices, not a code pattern.", [P(55, "Jump Game"), P(763, "Partition Labels")], ["Write the rule in one sentence.", "Construct a counterexample to a tempting wrong rule.", "State the invariant and complexity."], "You can explain why your choice is safe." )
  ]),
  W("Binary trees: traversals", "BINARY TREES", "A tree node contains smaller left and right subtree problems. Learn recursive DFS orders and queue-based level traversal.", "You can trace preorder, inorder, postorder, and level order without running code.", "Given a tree, produce the four traversal outputs and explain the visit position.", "First define what the recursive function returns at one node; then combine the left and right results.", [
    D("Tree model & preorder", "Define a node and visit root before its children.", "A null pointer is the natural base case; each real node is visited once.", [P(144, "Binary Tree Preorder Traversal", "Easy")], ["Draw root, leaves, depth, and height.", "Write a node struct and null base case.", "Trace root-left-right on a 3-node tree."], "Your function visits each node once and stops at null."),
    D("Inorder and postorder", "Place the visit between or after child calls.", "One template creates three DFS orders by moving the visit line.", [P(94, "Binary Tree Inorder Traversal", "Easy"), P(145, "Binary Tree Postorder Traversal", "Easy")], ["Write preorder/inorder/postorder from memory.", "Trace a tree with one missing child.", "Explain which order is useful for BST sorted values."], "You predict traversal output by visit placement."),
    D("Level-order BFS", "Use a queue and capture the current level size.", "The queue may contain later levels, so the size snapshot separates this level.", [P(102, "Binary Tree Level Order Traversal")], ["Draw the queue before and after each pop.", "Snapshot queue size at level start.", "Test empty root and uneven branch depths."], "The result groups nodes by depth."),
    D("Depth and equality", "Define a return contract for height and pairwise tree equality.", "Null-node return values make the recurrence concise and determine edge behavior.", [P(104, "Maximum Depth of Binary Tree", "Easy"), P(100, "Same Tree", "Easy")], ["Write the meaning of each function in one sentence.", "Choose null returns/base cases.", "Test an empty tree and mismatched child."], "You can explain how child results combine."),
    D("Traversal checkpoint", "Rebuild three DFS traversals and BFS from memory.", "Patterns stick when you retrieve them without the example code visible.", [P(94, "Binary Tree Inorder Traversal", "Easy"), P(102, "Binary Tree Level Order Traversal")], ["Write expected outputs for one sample tree.", "Code one DFS and one BFS traversal.", "Fix edge cases without reopening a solution."], "You can distinguish DFS recursion from BFS queue state.")
  ]),
  W("Binary trees: properties", "BINARY TREES", "Return subtree summaries and track global path properties. Learn to tell the recursive return value from the final answer.", "You can derive height, diameter, balance, symmetry, and path logic from contracts.", "Say what a call returns to its parent and what answer may need to be updated globally.", "The answer through a node and the value returned to its parent are sometimes different quantities.", [
    D("Mirror & invert", "Compare mirrored pairs or swap a node's children recursively.", "Symmetry pairs opposite sides; equality pairs matching sides.", [P(226, "Invert Binary Tree", "Easy"), P(101, "Symmetric Tree", "Easy")], ["Draw paired recursive calls for symmetry.", "Implement invert and symmetry separately.", "Test a mirror-shaped but value-mismatched tree."], "You pair left-left/right-right correctly for a mirror check."),
    D("Diameter", "Compute subtree heights and update the best path through each node.", "A path through a node combines left and right heights, but only one side can be returned upward.", [P(543, "Diameter of Binary Tree", "Easy")], ["Count edges consistently in a sample.", "Write the height return and diameter update separately.", "Test a single node and a skewed tree."], "You explain why diameter is not simply returned as height."),
    D("Balance & max depth", "Check whether subtree heights differ by at most one.", "An early failure return can avoid recomputing heights repeatedly.", [P(110, "Balanced Binary Tree", "Easy"), P(104, "Maximum Depth of Binary Tree", "Easy")], ["Define height convention.", "Return a failure marker when an unbalanced subtree is found.", "Test a deep imbalance below the root."], "The height work is not repeated for every node."),
    D("Right-side view", "Select the visible node at each depth.", "BFS level-last or right-first DFS both work because the view is one node per depth.", [P(199, "Binary Tree Right Side View")], ["Trace the queue by levels.", "Implement level-last selection or right-first DFS.", "Test missing right children with deeper left nodes."], "You understand why traversal order determines the selected node."),
    D("Tree properties review", "Explain and re-solve one bottom-up tree property.", "A written contract exposes mistakes in what the recursive call returns.", [P(543, "Diameter of Binary Tree", "Easy"), P(110, "Balanced Binary Tree", "Easy")], ["Write each return value's meaning.", "Re-solve one property without notes.", "Test empty, single-node, and skewed trees."], "You state return value, global state, and complexity clearly.")
  ]),
  W("Binary trees: paths & construction", "BINARY TREES", "Carry path state down, search for an ancestor from both sides, and rebuild a tree from traversal segments.", "You can define a recursive return contract for path, LCA, and construction problems.", "Explain how child information travels back to the parent and which base cases stop it.", "For LCA, ask what the current node should report when it finds one of the targets.", [
    D("Root-to-leaf target", "Carry a remaining target sum to each child and check only at leaves.", "A node with one missing child is not necessarily a leaf.", [P(112, "Path Sum", "Easy"), P(113, "Path Sum II")], ["Choose remaining-sum or accumulated-sum state.", "Write the true leaf condition.", "Trace one successful and one failed path."], "The answer is checked only at a root-to-leaf endpoint."),
    D("Lowest common ancestor", "Let left and right subtrees report whether they found a target.", "If targets split across subtrees, the current node is their lowest shared ancestor.", [P(236, "Lowest Common Ancestor of a Binary Tree")], ["Write null and target-match cases.", "Trace split targets and ancestor-target cases.", "Implement the combine rule."], "You can explain why returning the found node is enough."),
    D("Rebuild from traversals", "Use preorder root and inorder split to define subtree ranges.", "The split index determines how many nodes belong in the left subtree.", [P(105, "Construct Binary Tree from Preorder and Inorder Traversal")], ["Trace a 3-node reconstruction.", "Calculate left/right segment boundaries explicitly.", "Use an index map and test a skewed result."], "You explain why unique values are assumed by this approach."),
    D("Serialize a tree", "Represent missing children explicitly so shape can be recovered.", "Null markers remove ambiguity between different tree shapes.", [P(297, "Serialize and Deserialize Binary Tree", "Hard")], ["Write preorder tokens including nulls.", "Design a parser consuming tokens in the same order.", "Test a root with only a right child."], "You can explain why null markers are needed."),
    D("Tree path checkpoint", "Mix a path problem with an ancestor or traversal task.", "Different tree questions need different state directions: down, up, or both.", [P(112, "Path Sum", "Easy"), P(236, "Lowest Common Ancestor of a Binary Tree")], ["Choose one easy and one medium task.", "Write the function contract before code.", "Record one missed edge case and the invariant that catches it."], "You can select a return value that matches the problem's question.")
  ]),
  W("Binary search trees", "BST", "Use the global ordering invariant to search one side, validate subtrees with bounds, and exploit inorder order.", "You can use bounds correctly and explain why parent-child checks alone do not validate a BST.", "For a BST problem, state the ordering invariant and how it narrows work.", "Every node must respect ancestor bounds, not only its direct parent's value.", [
    D("Search and insert", "Follow comparisons to find a value or its insertion point.", "Each comparison discards one subtree because of the BST invariant.", [P(700, "Search in a Binary Search Tree", "Easy"), P(701, "Insert into a Binary Search Tree")], ["Write smaller-left and larger-right invariant.", "Implement search, then insertion.", "Insert a sequence and sketch the resulting shape."], "You preserve the invariant after every insertion."),
    D("Validate using bounds", "Carry allowed min/max bounds into each subtree.", "A descendant can violate an ancestor even when it is correctly placed relative to its parent.", [P(98, "Validate Binary Search Tree")], ["Construct a parent-only counterexample.", "Pass updated bounds to left and right children.", "Test negative and boundary values safely."], "The entire subtree is checked against inherited bounds."),
    D("Kth smallest", "Use inorder traversal because it visits keys in sorted order.", "Counting visits provides the kth value without sorting the entire tree separately.", [P(230, "Kth Smallest Element in a BST")], ["Write inorder order for a sample BST.", "Track visited count and answer.", "Test k=1 and k=node count."], "You connect the traversal order to the requested rank."),
    D("BST LCA and deletion", "Use ordering to find split point; understand all deletion shapes.", "Deletion must reconnect the replacement subtree while preserving order.", [P(235, "Lowest Common Ancestor of a BST"), P(450, "Delete Node in a BST")], ["Find LCA by walking from the root.", "Draw deletion cases: leaf, one child, two children.", "Implement LCA and explain the two-child replacement."], "You can describe deletion cases before coding."),
    D("BST checkpoint", "Rebuild validation and kth-smallest without notes.", "The invariant should decide the algorithm before implementation begins.", [P(98, "Validate Binary Search Tree"), P(230, "Kth Smallest Element in a BST")], ["Write bounds-based validation from memory.", "Re-solve kth-smallest.", "Explain how a skewed BST changes time complexity."], "You can state average and worst-case height effects.")
  ]),
  W("Graphs: representation & traversal", "GRAPHS", "Define vertices and edges, then explore a network using DFS or BFS. Grids are graphs with implicit neighbors.", "You can build adjacency lists, prevent revisits, and explain traversal complexity.", "Trace BFS and DFS on a cycle and explain when a node becomes visited.", "Mark a node visited when it is added to the queue or entered, not after repeatedly rediscovering it.", [
    D("Adjacency lists", "Represent directed/undirected edges and handle isolated vertices.", "The representation must match edge direction and vertex indexing.", [P(1971, "Find if Path Exists in Graph", "Easy")], ["Draw an edge list and adjacency list.", "Write C++ insertion for directed and undirected edges.", "Test an isolated node and disconnected graph."], "Every input edge creates the expected adjacency entries."),
    D("DFS reachability", "Explore neighbors recursively while using visited state.", "Visited prevents infinite loops in cyclic graphs.", [P(1971, "Find if Path Exists in Graph", "Easy"), P(133, "Clone Graph")], ["Write the visited invariant.", "Trace DFS through a cycle.", "Attempt reachability; identify the extra map needed for cloning."], "Every reachable node is visited once."),
    D("BFS layers", "Use a queue to explore by increasing number of edges.", "For unweighted edges, the first BFS discovery gives the minimum edge distance.", [P(752, "Open the Lock")], ["Label queue layers by distance.", "Mark nodes when enqueuing.", "Test a blocked start or unreachable destination."], "You can justify BFS for unweighted shortest path."),
    D("Grid as graph", "Treat each valid cell as a vertex with four neighbor edges.", "Marking when discovered prevents the same land cell entering the traversal repeatedly.", [P(200, "Number of Islands"), P(733, "Flood Fill", "Easy")], ["Define valid directions and boundary checks.", "Start a traversal from each unvisited land cell.", "Test all-water, one-cell, and connected-edge cases."], "Each cell is processed at most once."),
    D("Graph traversal review", "Compare DFS/BFS and state their time complexity.", "The graph representation and visited rule are reusable across problems.", [P(695, "Max Area of Island"), P(133, "Clone Graph")], ["Trace both methods on a cyclic graph.", "Re-solve one grid or graph task.", "Write O(V+E) and define V and E."], "You can explain the difference between traversal and cloning state.")
  ]),
  W("Graphs: cycles & topological order", "GRAPHS", "Distinguish directed from undirected cycles, then order tasks using prerequisites and indegrees.", "You can implement cycle detection and produce a topological ordering when one exists.", "Explain what indegree means and why zero-indegree nodes are safe to process.", "Directed and undirected cycle checks differ. Do not reuse one visited rule blindly.", [
    D("Undirected cycle + DSU", "Detect an edge that connects vertices already in one component.", "If both endpoints are already connected, adding this edge closes a cycle.", [P(684, "Redundant Connection")], ["Draw a tree plus one extra edge.", "Implement find with path compression and union.", "Return the first edge whose endpoints already share a root."], "You explain why the parent edge is not itself a cycle in DFS."),
    D("Directed cycle DFS", "Track unvisited, active, and finished nodes.", "A back edge to an active recursion-path node indicates a directed cycle.", [P(207, "Course Schedule")], ["Draw a DAG and a directed cycle.", "Keep recursion-stack state separate from completed visited state.", "Attempt course feasibility and test a self-loop."], "You distinguish an edge to a finished node from a back edge."),
    D("Kahn's algorithm", "Process zero-indegree nodes and reduce neighbors' indegrees.", "If not all nodes are processed, some dependency cycle remains.", [P(210, "Course Schedule II")], ["Build indegrees from prerequisite edges.", "Trace queue removals and neighbor updates.", "Return an empty ordering if processed count is too small."], "The produced order respects every prerequisite edge."),
    D("Multi-source BFS", "Start all sources at distance zero and expand together.", "Layer count measures elapsed time when each edge represents one time step.", [P(994, "Rotting Oranges")], ["Enqueue every initial source.", "Count minutes by BFS layers.", "Test no fresh items and unreachable fresh items."], "You can explain why all sources enter at the beginning."),
    D("Cycle/topology review", "Choose cycle logic based on directedness and required result.", "The algorithm's state must distinguish the kind of revisit that matters.", [P(207, "Course Schedule"), P(210, "Course Schedule II")], ["Label a prompt directed/undirected and cycle/order/reachability.", "Re-solve one course schedule problem.", "Explain how the output reveals a cycle."], "You select DFS-state or indegree method for a reason.")
  ]),
  W("Weighted graphs & DSU", "GRAPHS", "Choose shortest-path or connectivity tools based on edge weights and the question being asked.", "You can explain relaxation, Dijkstra's weight condition, and DSU/Kruskal at a high level.", "Name the edge-weight assumptions and the meaning of the distance stored at each vertex.", "With different edge costs, plain BFS no longer minimizes total cost. Match the algorithm to the weights.", [
    D("Dijkstra", "Expand the currently cheapest known distance using a min-priority queue.", "Relaxation improves a neighbor when a cheaper route is found; nonnegative edges are required.", [P(743, "Network Delay Time")], ["Write dist[v] > dist[u] + weight.", "Trace heap entries and ignore stale distances.", "Test disconnected nodes and large distance sums."], "You can explain why negative edges invalidate Dijkstra."),
    D("Unweighted grid shortest path", "Use BFS layers when every move has equal cost.", "The first visit gives the shortest number of moves in an unweighted graph.", [P(1091, "Shortest Path in Binary Matrix")], ["Model cells as nodes and legal moves as edges.", "Track distance by levels.", "Check blocked start, blocked end, and one-cell grid."], "You can justify BFS rather than Dijkstra here."),
    D("DSU components", "Maintain groups while connections are added.", "Path compression and union by size/rank keep the trees shallow.", [P(684, "Redundant Connection")], ["Initialize every node as its own parent.", "Trace find on a parent chain.", "Use union to detect a repeated connection."], "You can explain what a root represents."),
    D("Minimum spanning tree", "Use Kruskal to accept low-weight edges that merge components.", "DSU rejects edges that would create a cycle while connecting components cheaply.", [P(1584, "Min Cost to Connect All Points")], ["Sort a small edge list by weight.", "Accept only edges joining different roots.", "Stop when the graph is connected; estimate edge count for point graphs."], "You explain why accepted edges form no cycle."),
    D("Graph algorithm review", "Match reachability, unweighted distance, weighted distance, and connectivity prompts.", "Constraints determine which algorithm's assumptions hold.", [P(743, "Network Delay Time"), P(684, "Redundant Connection")], ["Make a four-row algorithm/assumption comparison.", "Re-solve one graph question without notes.", "Include disconnected and weight-bound edge cases."], "You choose the algorithm from the constraints rather than keywords.")
  ]),
  W("DP: recursion to 1D", "DYNAMIC PROGRAMMING", "Start from a recurrence you understand, cache repeated states, then fill a table in dependency order.", "You can define state, transition, base cases, order, and complexity before coding.", "For dp[i], say exactly what the value means and which earlier states it uses.", "DP is organized brute force. Keep the choices visible until the transition makes sense.", [
    D("Memoize Fibonacci", "Cache each state so repeated recursive calls reuse their answer.", "There are only O(n) distinct Fibonacci states despite the larger recursion tree.", [P(509, "Fibonacci Number", "Easy")], ["Draw repeated calls for fib(5).", "Define memo[n] meaning and base values.", "Compare call counts before and after caching."], "Each distinct state is computed once."),
    D("Climbing stairs", "Count ways to reach a step from allowed previous steps.", "The recurrence follows the legal last move into the current step.", [P(70, "Climbing Stairs", "Easy"), P(746, "Min Cost Climbing Stairs", "Easy")], ["Write the state meaning in words.", "Derive recurrence from last move.", "Test n=1 and n=2 before larger inputs."], "You can derive the recurrence rather than recall it."),
    D("Memo to tabulation", "Fill a bottom-up table from base states to the requested state.", "A valid loop order must compute dependencies before they are used.", [P(70, "Climbing Stairs", "Easy")], ["Draw dependency arrows for first few states.", "Write the table and loop order.", "Compare results with the memoized version."], "Every referenced state has already been computed."),
    D("Take or skip", "Model a choice between selecting an item and leaving it.", "The state summarizes the best result from the remaining suffix or prefix.", [P(198, "House Robber")], ["Draw choices for three houses.", "Define dp[i] and derive take/skip transition.", "Test one item and adjacent high values."], "You explain why adjacent items cannot both be selected."),
    D("DP foundation review", "Solve a 1D DP problem through recurrence, memo, and table.", "Different implementations should represent the same state transition.", [P(198, "House Robber"), P(746, "Min Cost Climbing Stairs", "Easy")], ["Write state, transition, base, order, complexity.", "Re-solve one problem without notes.", "Only then identify whether old states can be discarded."], "You can explain all five parts before coding.")
  ]),
  W("DP: grids & paths", "DYNAMIC PROGRAMMING", "Use coordinates as state; legal moves define transitions. Add obstacles and costs without changing the state meaning.", "You can derive grid transitions and handle boundaries and impossible states.", "Draw dependency arrows for a small grid and explain the base row and column.", "Only use predecessors allowed by the movement rules. A grid does not imply top/left automatically.", [
    D("Unique paths", "Count ways to reach a cell from legal predecessor cells.", "With right/down moves, each cell depends on top and left.", [P(62, "Unique Paths")], ["Draw a 3x3 grid with arrows.", "Write ways(row,col) and base cases.", "Memoize first, then tabulate."], "You can derive the top/left transition and boundary cases."),
    D("Obstacles", "Treat blocked cells as unreachable while counting paths.", "An obstacle sets the state to zero ways; it is not an ordinary predecessor.", [P(63, "Unique Paths II")], ["Write blocked-cell behavior.", "Trace a grid where an obstacle blocks a whole row.", "Test blocked start and blocked destination."], "Blocked states cannot contribute paths."),
    D("Minimum path cost", "Accumulate cell cost and choose the cheaper legal predecessor.", "The transition changes from adding ways to minimizing accumulated cost.", [P(64, "Minimum Path Sum")], ["Define dp[r][c] as min cost to reach the cell.", "Handle first row and first column.", "Compare the table with a manual 2x3 calculation."], "You distinguish counting paths from minimizing cost."),
    D("Triangle state", "Represent an irregular grid with row and column state.", "Each location has only the children permitted by the triangle structure.", [P(120, "Triangle")], ["Draw valid child edges.", "Write state (row,col) and base row.", "Compare top-down and bottom-up approaches."], "Every transition stays inside the triangle."),
    D("Grid DP review", "Re-derive a path or cost transition from the legal moves.", "The state meaning is what makes similar-looking grid questions differ.", [P(62, "Unique Paths"), P(64, "Minimum Path Sum")], ["Draw dependencies before writing code.", "Re-solve one grid DP task.", "Test single row, single column, and blocked/impossible cases."], "You can justify each predecessor and base case.")
  ]),
  W("DP: knapsack & subsequences", "DYNAMIC PROGRAMMING", "Encode remaining capacity, target, or sequence positions in the state. Loop direction controls whether an item can be reused.", "You can distinguish 0/1 and unbounded choices and derive sequence/string DP transitions.", "Explain the state dimensions, item reuse rule, and why the chosen iteration order is valid.", "Loop direction is part of the recurrence. Reverse iteration prevents reusing an item in 0/1 subset sum.", [
    D("Minimum coin count", "Find the fewest coins needed for each amount.", "Each transition chooses a last coin and solves the remaining amount.", [P(322, "Coin Change")], ["Write recursive remaining-amount state.", "Memoize, then tabulate amounts upward.", "Represent unreachable amounts explicitly."], "Amount zero needs zero coins; impossible amounts remain impossible."),
    D("Count coin combinations", "Count combinations without treating order as a different solution.", "Coin-outer iteration builds combinations; loop order changes what gets counted.", [P(518, "Coin Change II")], ["Define what dp[amount] counts.", "Trace [1,2] making amount 3.", "Compare coin-outer and amount-outer loops."], "You can explain why order is not double-counted."),
    D("0/1 subset sum", "Decide whether a subset reaches the target using each item once.", "Reverse sum iteration stops the current item from feeding itself in the same pass.", [P(416, "Partition Equal Subset Sum")], ["Reduce equal partition to target total/2.", "Write the boolean transition.", "Trace reverse loop direction on two equal values."], "You explain why forward iteration would change the problem."),
    D("Target sum choices", "Count plus/minus assignments and connect them to a subset formulation.", "The algebraic conversion has parity and range conditions; derive them before using them.", [P(494, "Target Sum")], ["Draw + / - decisions for [1,1,1].", "Define a count state first.", "Derive any subset transformation and its validity conditions."], "You distinguish counting ways from boolean reachability."),
    D("LCS and LIS preview", "Read sequence DP state definitions and see how indices encode choices.", "Subsequence choices create states over positions; strings often need two indices.", [P(1143, "Longest Common Subsequence"), P(300, "Longest Increasing Subsequence")], ["Write what dp[i][j] could mean for LCS.", "Write the O(n^2) LIS state.", "Re-solve one knapsack task and explain loop direction."], "You can name the state before seeing a solution." )
  ]),
  W("Trie, strings & consolidation", "TRIE + STRINGS", "Finish prefix structures and use the final sessions to retrieve patterns without topic labels. Maintain a personal redo queue.", "You can implement trie operations and explain the approach, invariant, complexity, and edge cases for mixed problems.", "Complete a mixed set, then explain the pattern and one failure case for each solution.", "The goal is not a perfect streak. Keep questions that needed help in a deliberate redo list.", [
    D("Trie operations", "Implement insert, search, and startsWith using shared prefixes.", "A node existing does not necessarily mean a complete word ends there.", [P(208, "Implement Trie (Prefix Tree)")], ["Draw two words with a common prefix.", "Define child links and end-of-word marker.", "Test a prefix that is not itself a complete word."], "Search and prefix checks return different answers where expected."),
    D("Wildcard trie", "Branch over possible children when the query contains a wildcard.", "A wildcard changes one path into a small DFS over matching branches.", [P(211, "Design Add and Search Words Data Structure")], ["Trace a wildcard search on a small trie.", "Keep ordinary characters on one path.", "Attempt the wildcard case and test no matching branch."], "You can explain when branching is required."),
    D("String search patterns", "Use direct scan or learn a prefix-based matcher when constraints demand it.", "An optimization should preserve a clear definition of what prefix has already matched.", [P(28, "Find the Index of the First Occurrence in a String", "Easy"), P(5, "Longest Palindromic Substring")], ["Write a straightforward substring scan.", "Trace expand-around-center for odd and even palindromes.", "Compare brute force and optimized complexity."], "You understand the baseline before the optimization."),
    D("Mixed timed practice", "Choose a pattern without being told the topic.", "Retrieval practice checks whether a pattern is recognized from the problem itself.", [P(3, "Longest Substring Without Repeating Characters"), P(200, "Number of Islands"), P(198, "House Robber")], ["Pick two problems from different topics.", "Spend up to 35 minutes each before looking for a hint.", "Log where reasoning or implementation got stuck."], "You identify the pattern and write a correct complexity estimate."),
    D("Build your redo map", "Choose representative questions and schedule future revision.", "A short targeted queue beats rereading every solution from the beginning.", [P(78, "Subsets"), P(98, "Validate Binary Search Tree"), P(322, "Coin Change")], ["Choose one easy, one medium, and one previously-hinted problem.", "Explain approach, invariant, complexity, and edge case aloud.", "Write a small weekly redo list for the next month."], "Your weak patterns have a concrete revisit date.")
  ])
];

const reportedSolvedIds = new Set(`22 78 1922 50 29 725 61 92 25 328 2 160 498 148 228 2095 19 289 234 1991 724 713 209 442 74 287 142 141 977 206 876 237 1910 345 796 242 125 344 4 875 93 198 64 120 8 56 51 2452 1441 731 3906 3904 3903 729 66 494 593 794 192 273 88 12 13 18 659 410 3478 240 852 71 89 2064 81 1552 1539 1011 239 151 347 49 1283 1482 36 69 1047 20 122 2210 162 540 34 153 1877 42 119 118 185 189 73 35 11 310 46 747 175 16 67 744 493 15 704 215 57 229 53 912 47 152 414 2149 2769 2404 2011 2413 217 586 183 181 169 584 1757 595 283 26 2124 1752 59 54 1929 1886 48 2235 128 238 1299 41 31 121 75 771 1108 2469 1480 167 1 974 560 136 485 268 7 2460 1295 9`.split(/\s+/).map(Number));

const retryQuestions = [
  { id: 46, name: "Permutations", topic: "Recursion & Backtracking", difficulty: "Medium", slug: "permutations", status: "Compile Error", attempts: 3 },
  { id: 192, name: "Word Frequency", topic: "SQL", difficulty: "Medium", slug: "word-frequency", status: "Runtime Error", attempts: 3 },
  { id: 215, name: "Kth Largest Element in an Array", topic: "Heaps", difficulty: "Medium", slug: "kth-largest-element-in-an-array", status: "Time Limit Exceeded", attempts: 4 }
];

const candidateQuestions = [
  Q(17, "Letter Combinations of a Phone Number", "Recursion & Backtracking", "Medium"),
  Q(39, "Combination Sum", "Recursion & Backtracking", "Medium"),
  Q(40, "Combination Sum II", "Recursion & Backtracking", "Medium"),
  Q(52, "N-Queens II", "Recursion & Backtracking", "Hard"),
  Q(77, "Combinations", "Recursion & Backtracking", "Medium"),
  Q(79, "Word Search", "Recursion & Backtracking", "Medium"),
  Q(90, "Subsets II", "Recursion & Backtracking", "Medium"),
  Q(1079, "Letter Tile Possibilities", "Recursion & Backtracking", "Medium"),
  Q(1106, "Parsing A Boolean Expression", "Recursion & Backtracking", "Hard"),
  Q(216, "Combination Sum III", "Recursion & Backtracking", "Medium"),
  Q(401, "Binary Watch", "Recursion & Backtracking", "Easy"),
  Q(526, "Beautiful Arrangement", "Recursion & Backtracking", "Medium"),
  Q(638, "Shopping Offers", "Recursion & Backtracking", "Medium"),
  Q(698, "Partition to K Equal Sum Subsets", "Recursion & Backtracking", "Medium"),
  Q(784, "Letter Case Permutation", "Recursion & Backtracking", "Medium"),
  Q(980, "Unique Paths III", "Recursion & Backtracking", "Hard"),
  Q(1219, "Path with Maximum Gold", "Recursion & Backtracking", "Medium"),
  Q(1239, "Maximum Length of a Concatenated String with Unique Characters", "Recursion & Backtracking", "Medium"),
  Q(84, "Largest Rectangle in Histogram", "Stack & Queue", "Hard"),
  Q(155, "Min Stack", "Stack & Queue", "Medium"),
  Q(224, "Basic Calculator", "Stack & Queue", "Hard"),
  Q(227, "Basic Calculator II", "Stack & Queue", "Medium"),
  Q(316, "Remove Duplicate Letters", "Stack & Queue", "Medium"),
  Q(402, "Remove K Digits", "Stack & Queue", "Medium"),
  Q(456, "132 Pattern", "Stack & Queue", "Medium"),
  Q(735, "Asteroid Collision", "Stack & Queue", "Medium"),
  Q(901, "Online Stock Span", "Stack & Queue", "Medium"),
  Q(907, "Sum of Subarray Minimums", "Stack & Queue", "Medium"),
  Q(1209, "Remove All Adjacent Duplicates in String II", "Stack & Queue", "Medium"),
  Q(1944, "Number of Visible People in a Queue", "Stack & Queue", "Hard"),
  Q(3, "Longest Substring Without Repeating Characters", "Sliding Window", "Medium"),
  Q(76, "Minimum Window Substring", "Sliding Window", "Hard"),
  Q(159, "Longest Substring with At Most Two Distinct Characters", "Sliding Window", "Medium"),
  Q(424, "Longest Repeating Character Replacement", "Sliding Window", "Medium"),
  Q(438, "Find All Anagrams in a String", "Sliding Window", "Medium"),
  Q(567, "Permutation in String", "Sliding Window", "Medium"),
  Q(904, "Fruit Into Baskets", "Sliding Window", "Medium"),
  Q(992, "Subarrays with K Different Integers", "Sliding Window", "Hard"),
  Q(1004, "Max Consecutive Ones III", "Sliding Window", "Medium"),
  Q(1234, "Replace the Substring for Balanced String", "Sliding Window", "Medium"),
  Q(1658, "Minimum Operations to Reduce X to Zero", "Sliding Window", "Medium"),
  Q(1838, "Frequency of the Most Frequent Element", "Sliding Window", "Medium"),
  Q(23, "Merge k Sorted Lists", "Heaps", "Hard"),
  Q(295, "Find Median from Data Stream", "Heaps", "Hard"),
  Q(373, "Find K Pairs with Smallest Sums", "Heaps", "Medium"),
  Q(378, "Kth Smallest Element in a Sorted Matrix", "Heaps", "Medium"),
  Q(692, "Top K Frequent Words", "Heaps", "Medium"),
  Q(703, "Kth Largest Element in a Stream", "Heaps", "Easy"),
  Q(973, "K Closest Points to Origin", "Heaps", "Medium"),
  Q(1046, "Last Stone Weight", "Heaps", "Easy"),
  Q(1962, "Remove Stones to Minimize the Total", "Heaps", "Medium"),
  Q(45, "Jump Game II", "Greedy", "Medium"),
  Q(55, "Jump Game", "Greedy", "Medium"),
  Q(134, "Gas Station", "Greedy", "Medium"),
  Q(135, "Candy", "Greedy", "Hard"),
  Q(406, "Queue Reconstruction by Height", "Greedy", "Medium"),
  Q(621, "Task Scheduler", "Greedy", "Medium"),
  Q(763, "Partition Labels", "Greedy", "Medium"),
  Q(1029, "Two City Scheduling", "Greedy", "Medium"),
  Q(1326, "Minimum Number of Taps to Open to Water a Garden", "Greedy", "Hard"),
  Q(1578, "Minimum Time to Make Rope Colorful", "Greedy", "Medium"),
  Q(94, "Binary Tree Inorder Traversal", "Trees", "Easy"),
  Q(100, "Same Tree", "Trees", "Easy"),
  Q(101, "Symmetric Tree", "Trees", "Easy"),
  Q(102, "Binary Tree Level Order Traversal", "Trees", "Medium"),
  Q(103, "Binary Tree Zigzag Level Order Traversal", "Trees", "Medium"),
  Q(104, "Maximum Depth of Binary Tree", "Trees", "Easy"),
  Q(105, "Construct Binary Tree from Preorder and Inorder Traversal", "Trees", "Medium"),
  Q(106, "Construct Binary Tree from Inorder and Postorder Traversal", "Trees", "Medium"),
  Q(107, "Binary Tree Level Order Traversal II", "Trees", "Medium"),
  Q(110, "Balanced Binary Tree", "Trees", "Easy"),
  Q(111, "Minimum Depth of Binary Tree", "Trees", "Easy"),
  Q(112, "Path Sum", "Trees", "Easy"),
  Q(113, "Path Sum II", "Trees", "Medium"),
  Q(124, "Binary Tree Maximum Path Sum", "Trees", "Hard"),
  Q(129, "Sum Root to Leaf Numbers", "Trees", "Medium"),
  Q(144, "Binary Tree Preorder Traversal", "Trees", "Easy"),
  Q(145, "Binary Tree Postorder Traversal", "Trees", "Easy"),
  Q(199, "Binary Tree Right Side View", "Trees", "Medium"),
  Q(222, "Count Complete Tree Nodes", "Trees", "Easy"),
  Q(230, "Kth Smallest Element in a BST", "Trees", "Medium"),
  Q(235, "Lowest Common Ancestor of a Binary Search Tree", "Trees", "Medium"),
  Q(236, "Lowest Common Ancestor of a Binary Tree", "Trees", "Medium"),
  Q(257, "Binary Tree Paths", "Trees", "Easy"),
  Q(297, "Serialize and Deserialize Binary Tree", "Trees", "Hard"),
  Q(337, "House Robber III", "Trees", "Medium"),
  Q(404, "Sum of Left Leaves", "Trees", "Easy"),
  Q(437, "Path Sum III", "Trees", "Medium"),
  Q(450, "Delete Node in a BST", "Trees", "Medium"),
  Q(508, "Most Frequent Subtree Sum", "Trees", "Medium"),
  Q(513, "Find Bottom Left Tree Value", "Trees", "Medium"),
  Q(515, "Find Largest Value in Each Tree Row", "Trees", "Medium"),
  Q(530, "Minimum Absolute Difference in BST", "Trees", "Easy"),
  Q(538, "Convert BST to Greater Tree", "Trees", "Medium"),
  Q(543, "Diameter of Binary Tree", "Trees", "Easy"),
  Q(572, "Subtree of Another Tree", "Trees", "Easy"),
  Q(617, "Merge Two Binary Trees", "Trees", "Easy"),
  Q(653, "Two Sum IV - Input is a BST", "Trees", "Easy"),
  Q(654, "Maximum Binary Tree", "Trees", "Medium"),
  Q(662, "Maximum Width of Binary Tree", "Trees", "Medium"),
  Q(669, "Trim a Binary Search Tree", "Trees", "Medium"),
  Q(700, "Search in a Binary Search Tree", "Trees", "Easy"),
  Q(701, "Insert into a Binary Search Tree", "Trees", "Medium"),
  Q(814, "Binary Tree Pruning", "Trees", "Medium"),
  Q(863, "All Nodes Distance K in Binary Tree", "Trees", "Medium"),
  Q(865, "Smallest Subtree with all the Deepest Nodes", "Trees", "Medium"),
  Q(987, "Vertical Order Traversal of a Binary Tree", "Trees", "Hard"),
  Q(1372, "Longest ZigZag Path in a Binary Tree", "Trees", "Medium"),
  Q(1448, "Count Good Nodes in Binary Tree", "Trees", "Medium"),
  Q(133, "Clone Graph", "Graphs", "Medium"),
  Q(200, "Number of Islands", "Graphs", "Medium"),
  Q(207, "Course Schedule", "Graphs", "Medium"),
  Q(210, "Course Schedule II", "Graphs", "Medium"),
  Q(261, "Graph Valid Tree", "Graphs", "Medium"),
  Q(323, "Number of Connected Components in an Undirected Graph", "Graphs", "Medium"),
  Q(329, "Longest Increasing Path in a Matrix", "Graphs", "Hard"),
  Q(332, "Reconstruct Itinerary", "Graphs", "Hard"),
  Q(399, "Evaluate Division", "Graphs", "Medium"),
  Q(417, "Pacific Atlantic Water Flow", "Graphs", "Medium"),
  Q(433, "Minimum Genetic Mutation", "Graphs", "Medium"),
  Q(547, "Number of Provinces", "Graphs", "Medium"),
  Q(695, "Max Area of Island", "Graphs", "Medium"),
  Q(743, "Network Delay Time", "Graphs", "Medium"),
  Q(787, "Cheapest Flights Within K Stops", "Graphs", "Medium"),
  Q(797, "All Paths From Source to Target", "Graphs", "Medium"),
  Q(802, "Find Eventual Safe States", "Graphs", "Medium"),
  Q(827, "Making A Large Island", "Graphs", "Hard"),
  Q(841, "Keys and Rooms", "Graphs", "Medium"),
  Q(1091, "Shortest Path in Binary Matrix", "Graphs", "Medium"),
  Q(1129, "Shortest Path with Alternating Colors", "Graphs", "Medium"),
  Q(1192, "Critical Connections in a Network", "Graphs", "Hard"),
  Q(1293, "Shortest Path in a Grid with Obstacles Elimination", "Graphs", "Hard"),
  Q(1466, "Reorder Routes to Make All Paths Lead to the City Zero", "Graphs", "Medium"),
  Q(1557, "Minimum Number of Vertices to Reach All Nodes", "Graphs", "Medium"),
  Q(1631, "Path With Minimum Effort", "Graphs", "Medium"),
  Q(1971, "Find if Path Exists in Graph", "Graphs", "Easy"),
  Q(62, "Unique Paths", "Dynamic Programming", "Medium"),
  Q(63, "Unique Paths II", "Dynamic Programming", "Medium"),
  Q(70, "Climbing Stairs", "Dynamic Programming", "Easy"),
  Q(72, "Edit Distance", "Dynamic Programming", "Medium"),
  Q(91, "Decode Ways", "Dynamic Programming", "Medium"),
  Q(97, "Interleaving String", "Dynamic Programming", "Medium"),
  Q(115, "Distinct Subsequences", "Dynamic Programming", "Hard"),
  Q(139, "Word Break", "Dynamic Programming", "Medium"),
  Q(174, "Dungeon Game", "Dynamic Programming", "Hard"),
  Q(213, "House Robber II", "Dynamic Programming", "Medium"),
  Q(221, "Maximal Square", "Dynamic Programming", "Medium"),
  Q(279, "Perfect Squares", "Dynamic Programming", "Medium"),
  Q(300, "Longest Increasing Subsequence", "Dynamic Programming", "Medium"),
  Q(309, "Best Time to Buy and Sell Stock with Cooldown", "Dynamic Programming", "Medium"),
  Q(312, "Burst Balloons", "Dynamic Programming", "Hard"),
  Q(322, "Coin Change", "Dynamic Programming", "Medium"),
  Q(343, "Integer Break", "Dynamic Programming", "Medium"),
  Q(377, "Combination Sum IV", "Dynamic Programming", "Medium"),
  Q(416, "Partition Equal Subset Sum", "Dynamic Programming", "Medium"),
  Q(518, "Coin Change II", "Dynamic Programming", "Medium"),
  Q(583, "Delete Operation for Two Strings", "Dynamic Programming", "Medium"),
  Q(647, "Palindromic Substrings", "Dynamic Programming", "Medium"),
  Q(673, "Number of Longest Increasing Subsequence", "Dynamic Programming", "Medium"),
  Q(714, "Best Time to Buy and Sell Stock with Transaction Fee", "Dynamic Programming", "Medium"),
  Q(718, "Maximum Length of Repeated Subarray", "Dynamic Programming", "Medium"),
  Q(740, "Delete and Earn", "Dynamic Programming", "Medium"),
  Q(746, "Min Cost Climbing Stairs", "Dynamic Programming", "Easy"),
  Q(931, "Minimum Falling Path Sum", "Dynamic Programming", "Medium"),
  Q(1143, "Longest Common Subsequence", "Dynamic Programming", "Medium"),
  Q(1235, "Maximum Profit in Job Scheduling", "Dynamic Programming", "Hard"),
  Q(1277, "Count Square Submatrices with All Ones", "Dynamic Programming", "Medium"),
  Q(1463, "Cherry Pickup II", "Dynamic Programming", "Hard"),
  Q(1524, "Number of Sub-arrays With Odd Sum", "Dynamic Programming", "Medium"),
  Q(1639, "Number of Ways to Form a Target String Given a Dictionary", "Dynamic Programming", "Hard"),
  Q(208, "Implement Trie (Prefix Tree)", "Tries & Strings", "Medium"),
  Q(211, "Design Add and Search Words Data Structure", "Tries & Strings", "Medium"),
  Q(212, "Word Search II", "Tries & Strings", "Hard"),
  Q(5, "Longest Palindromic Substring", "Tries & Strings", "Medium"),
  Q(14, "Longest Common Prefix", "Tries & Strings", "Easy"),
  Q(28, "Find the Index of the First Occurrence in a String", "Tries & Strings", "Easy"),
  Q(648, "Replace Words", "Tries & Strings", "Medium"),
  Q(1048, "Longest String Chain", "Tries & Strings", "Medium"),
  Q(1392, "Longest Happy Prefix", "Tries & Strings", "Hard"),
  Q(33, "Search in Rotated Sorted Array", "Binary Search", "Medium"),
  Q(658, "Find K Closest Elements", "Binary Search", "Medium"),
  Q(523, "Continuous Subarray Sum", "Arrays & Hashing", "Medium"),
  Q(525, "Contiguous Array", "Arrays & Hashing", "Medium"),
  Q(930, "Binary Subarrays With Sum", "Arrays & Hashing", "Medium")
];

const questionPool = [...new Map(candidateQuestions.map((question) => [question.id, question])).values()]
  .filter((question) => !reportedSolvedIds.has(question.id));

const officialModules = [
  ["Beginner Problems", 83, "Programming foundations, logic-building patterns, and basic complexity.", "FOUNDATION"],
  ["Sorting", 7, "Sorting techniques and when their time costs matter.", "CORE"],
  ["Arrays", 32, "Traversal, subarrays, prefix ideas, and in-place changes.", "HIGH-YIELD"],
  ["Hashing", 6, "Frequency maps and fast lookups for array/string problems.", "HIGH-YIELD"],
  ["Binary Search", 32, "Search in sorted spaces, answer-space search, and boundaries.", "HIGH-YIELD"],
  ["Strings (Basic and Medium)", 7, "String traversal, matching, and common transformations.", "CORE"],
  ["Recursion", 22, "Base cases, choices, subsequences, and backtracking.", "HIGH-YIELD"],
  ["Linked-List", 49, "Pointers, reversal, cycles, merging, and list transformations.", "CORE"],
  ["Bit Manipulation", 14, "Binary operators, XOR patterns, masks, and set bits.", "CORE"],
  ["Greedy Algorithms", 14, "Local choices, intervals, scheduling, and proof intuition.", "CORE"],
  ["Sliding Window / 2 Pointer", 13, "Window invariants, frequency tracking, and pointer movement.", "HIGH-YIELD"],
  ["Stack / Queues", 31, "LIFO/FIFO patterns, monotonic structures, and expression parsing.", "HIGH-YIELD"],
  ["Binary Trees", 32, "Traversals, recursion, views, paths, and tree properties.", "HIGH-YIELD"],
  ["Binary Search Trees", 15, "Ordering invariants, bounds, search, and rank queries.", "HIGH-YIELD"],
  ["Heaps", 20, "Priority queues, top-k, and repeated minimum/maximum selection.", "CORE"],
  ["Graphs", 46, "BFS/DFS, cycles, topological order, shortest paths, and DSU.", "HIGH-YIELD"],
  ["Dynamic Programming", 53, "State, transition, memoization, tabulation, and optimization.", "HIGH-YIELD"],
  ["Tries", 7, "Prefix trees and efficient prefix/bitwise lookups.", "ADVANCED"],
  ["Strings (Advanced Algo)", 9, "KMP/LPS, Rabin-Karp, Z-function, and advanced matching.", "ADVANCED"],
  ["Maths", 3, "Prime generation and number-theory basics.", "CORE"]
].map(([name, count, focus, priority]) => ({ name, count, focus, priority }));

const weekPriorities = [
  ["CORE · HIGH-YIELD", "Recursion is the base for trees, backtracking, and DP."],
  ["CORE", "Index/state reasoning appears across array and string problems."],
  ["HIGH-YIELD", "Subset and combination search are common interview patterns."],
  ["HIGH-YIELD", "Backtracking choices and pruning recur in many problem families."],
  ["CORE", "Bit patterns are useful; prioritize fundamentals before rare tricks."],
  ["HIGH-YIELD", "Stacks and queues are common tools in parsing, BFS, and monotonic patterns."],
  ["HIGH-YIELD", "Monotonic stacks are a recurring interview pattern."],
  ["HIGH-YIELD", "Two pointers and sliding windows appear frequently in array/string interviews."],
  ["CORE", "Heap basics and top-k patterns are broadly useful."],
  ["CORE", "Greedy reasoning is common in scheduling and interval problems."],
  ["HIGH-YIELD", "Tree traversals and BFS/DFS are core interview fundamentals."],
  ["HIGH-YIELD", "Tree properties combine naturally with recursion."],
  ["HIGH-YIELD", "Tree paths and LCA are common patterns."],
  ["CORE", "BST invariants are essential for search and ordered queries."],
  ["HIGH-YIELD", "Graph traversal, cycle checks, and topological sorting are common."],
  ["HIGH-YIELD", "Graph cycle and dependency problems are frequent interview patterns."],
  ["CORE", "Weighted paths and DSU are important graph tools; learn assumptions carefully."],
  ["HIGH-YIELD", "DP fundamentals appear often; learn the transition instead of memorizing code."],
  ["CORE", "Grid DP is a standard transition-building exercise."],
  ["HIGH-YIELD", "Knapsack and subsequence DP are major interview patterns."],
  ["ADVANCED", "Tries and advanced string algorithms are valuable extensions after core patterns."]
];
const highYieldQuestionIds = new Set([3, 17, 20, 23, 39, 40, 45, 55, 62, 70, 76, 77, 79, 84, 90, 94, 98, 100, 102, 104, 105, 110, 112, 113, 124, 133, 139, 144, 145, 155, 199, 200, 207, 208, 210, 211, 213, 216, 230, 235, 236, 295, 300, 322, 347, 416, 424, 438, 494, 503, 518, 543, 567, 647, 695, 700, 701, 703, 739, 743, 746, 763, 784, 797, 901, 907, 930, 973, 980, 992, 1004, 1091, 1143, 1209, 1239, 1463, 1971]);

const simpleExamples = {
  "0-0": "n = 3 ho toh calls 3 → 2 → 1 → 0 tak jaati hain. Call ke pehle print karoge toh 3,2,1; call ke baad print karoge toh 1,2,3.",
  "0-1": "factorial(4) = 4 × factorial(3). Sabse chhota case factorial(0) = 1 answer deta hai; baaki calls us answer ko multiply karke wapas bhejte hain.",
  "0-2": "fib(4) ko fib(3) + fib(2) chahiye. fib(3) bhi apne chhote calls ka wait karta hai. fib(0) aur fib(1) answer dete hi values wapas upar aati hain aur add hoti hain.",
  "0-3": "sum(3, total=0) → sum(2, total=3) → sum(1, total=5) → sum(0, total=6). Har call ke parameters us call ki current progress batate hain.",
  "0-4": "Agar input 3 se 2, phir 1 nahi ja raha, toh base case tak pahunch hi nahi paayega. Har recursive call mein changing value check karo.",
  "1-0": "Array [4, 2, 7] mein index 0 se start hoga: 4 + solve(index 1). Last valid index ke baad base case 0 return karega.",
  "1-1": "[1, 2, 3, 4] mein 1↔4 swap karo, phir 2↔3. Pointers milte/cross karte hi reverse complete hai.",
  "1-2": "'racecar' mein pehle r==r, phir a==a, phir c==c. Agar kisi pair par mismatch aaye toh palindrome nahi hai.",
  "2-0": "[1,2] ke liye pehle 1 lo ya skip karo; dono branches mein 2 lo/skip karo. Isse [], [1], [2], [1,2] milte hain.",
  "2-3": "Target 7 aur candidate 2 ho toh include karne ke baad remaining target 5 hai; 2 dobara use ho sakta hai, isliye index wahi rehta hai.",
  "3-0": "[1,2,3] ke permutations mein pehle position par 1/2/3 mein se ek chuno; agle position par bache hue values hi allowed hain.",
  "5-0": "Bracket '(': stack mein push. ')' aaye toh sabse recent unmatched '(' ko pop karo. Isliye nested brackets stack se naturally match hote hain."
};

const STORAGE_KEY = "dsa-fieldnotes-progress-v1";
const defaults = { completed: {}, selectedWeek: 0, selectedDay: 0, queuedQuestions: [], solvedQuestions: [], poolView: "fresh" };
let state;
try { state = { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
catch { state = { ...defaults }; }
state.queuedQuestions ||= [];
state.solvedQuestions ||= [];

const els = {
  weekNav: document.querySelector("#week-nav"), dayStrip: document.querySelector("#day-strip"),
  topWeek: document.querySelector("#top-week-label"), todayDate: document.querySelector("#today-date"),
  progressPercent: document.querySelector("#progress-percent"), progressCount: document.querySelector("#progress-count"),
  progressRing: document.querySelector("#progress-ring"), sessionTitle: document.querySelector("#session-title"),
  sessionNumber: document.querySelector("#session-number"), topic: document.querySelector("#session-topic"),
  sessionPriority: document.querySelector("#session-priority"),
  duration: document.querySelector("#session-duration"), dayTitle: document.querySelector("#day-title"),
  dayGoal: document.querySelector("#day-goal"), dayWhy: document.querySelector("#day-why"),
  taskSteps: document.querySelector("#task-steps"), timeBlocks: document.querySelector("#time-blocks"),
  problemList: document.querySelector("#problem-list"), doneCriteria: document.querySelector("#done-criteria"),
  completeButton: document.querySelector("#complete-session"), completeLabel: document.querySelector("#complete-label"),
  coach: document.querySelector("#coach-note p"), weekCode: document.querySelector("#week-code"),
  weekTitle: document.querySelector("#week-title"), weekSummary: document.querySelector("#week-summary"),
  weekCount: document.querySelector("#week-count"), weekMeter: document.querySelector("#week-meter-fill"),
  weekOutcome: document.querySelector("#week-outcome"), checkpoint: document.querySelector("#week-checkpoint"),
  checkpointStatus: document.querySelector("#checkpoint-status"), checkpointLabel: document.querySelector("#checkpoint-label"),
  resetButton: document.querySelector("#reset-progress"), resetDialog: document.querySelector("#reset-dialog"),
  poolTotal: document.querySelector("#pool-total"), poolQueueCount: document.querySelector("#pool-queue-count"),
  poolDoneCount: document.querySelector("#pool-done-count"), poolExcludedCount: document.querySelector("#pool-excluded-count"),
  poolSearch: document.querySelector("#pool-search"), poolTopic: document.querySelector("#pool-topic"),
  poolDifficulty: document.querySelector("#pool-difficulty"), poolTabs: document.querySelector("#pool-tabs"),
  poolGrid: document.querySelector("#pool-grid"), poolEmpty: document.querySelector("#pool-empty"),
  freshTabCount: document.querySelector("#fresh-tab-count"), queueTabCount: document.querySelector("#queue-tab-count"),
  doneTabCount: document.querySelector("#done-tab-count"), surprisePick: document.querySelector("#surprise-pick"),
  randomAnnouncement: document.querySelector("#random-announcement"), workedExample: document.querySelector("#worked-example"),
  workedExampleText: document.querySelector("#worked-example-text"), moduleGrid: document.querySelector("#module-grid")
};

const pad = (number) => String(number).padStart(2, "0");
const dayNames = ["DAY 1", "DAY 2", "DAY 3", "DAY 4", "DAY 5", "REVIEW"];
const sessionTotal = weeks.length * 6;
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const keyFor = (weekIndex, dayIndex) => `${weekIndex}-${dayIndex}`;
const isComplete = (weekIndex, dayIndex) => Boolean(state.completed[keyFor(weekIndex, dayIndex)]);
const weekDone = (weekIndex) => Array.from({ length: 6 }, (_, i) => isComplete(weekIndex, i)).filter(Boolean).length;
const totalDone = () => Object.values(state.completed).filter(Boolean).length;

function getSession(weekIndex, dayIndex) {
  const week = weeks[weekIndex];
  if (dayIndex < 5) return { ...week.days[dayIndex], review: false };
  const practice = week.days.flatMap((day) => day.problems).slice(0, 3);
  return {
    title: "Weekly review & catch-up",
    goal: "Retrieve the week's ideas from memory, fix one gap, and decide what deserves another pass.",
    why: week.checkpoint,
    problems: practice,
    actions: ["Close notes and write the week's core pattern from memory.", "Re-solve one problem that needed a hint, or debug one old mistake.", "Explain the checkpoint aloud with one edge case and complexity.", "Move unfinished work deliberately; do not mark it done to keep a streak.", "Pick the first task for next week and leave yourself one reminder."],
    done: "You explained the checkpoint and either re-solved a question or wrote a specific catch-up task.",
    review: true
  };
}

function renderNav() {
  els.weekNav.innerHTML = weeks.map((week, index) => {
    const selected = index === state.selectedWeek;
    const count = weekDone(index);
    return `<button type="button" data-week="${index}" aria-current="${selected ? "page" : "false"}" aria-label="Week ${index + 1}: ${week.title}, ${count} of 6 complete"><span class="nav-number">${pad(index + 1)}</span><span class="nav-name">${week.title}</span><span class="nav-check">${count === 6 ? "✓" : ""}</span></button>`;
  }).join("");
  els.weekNav.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    state.selectedWeek = Number(button.dataset.week);
    state.selectedDay = 0;
    save();
    render();
    document.querySelector(".workbench").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
}

function renderDays() {
  els.dayStrip.innerHTML = dayNames.map((name, index) => `<button class="day-tab" type="button" data-day="${index}" aria-pressed="${index === state.selectedDay}" aria-label="${name}${isComplete(state.selectedWeek, index) ? ", completed" : ""}"><span>${name}</span><span class="day-state" aria-hidden="true">${isComplete(state.selectedWeek, index) ? "✓" : "·"}</span></button>`).join("");
  els.dayStrip.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    state.selectedDay = Number(button.dataset.day);
    save();
    render();
  }));
}

function renderProblems(problems) {
  if (!problems.length) {
    els.problemList.innerHTML = `<p class="problem-name">Use the official A2Z problem for today's concept; no extra LC companion is assigned.</p>`;
    return;
  }
  els.problemList.innerHTML = problems.map((problem) => `<a class="problem-link" href="https://leetcode.com/problems/${problem.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}/" target="_blank" rel="noreferrer" aria-label="LeetCode ${problem.id}: ${problem.name}, ${problem.level}"><span><span class="problem-id">#${problem.id}</span><span class="problem-name">${problem.name}</span></span><span class="problem-link-tags">${highYieldQuestionIds.has(problem.id) ? `<span class="yield-tag">HIGH-YIELD</span>` : ""}<span class="problem-difficulty">${problem.level}</span></span></a>`).join("");
}

function renderSession() {
  const week = weeks[state.selectedWeek];
  const session = getSession(state.selectedWeek, state.selectedDay);
  const done = isComplete(state.selectedWeek, state.selectedDay);
  const sequence = state.selectedWeek * 6 + state.selectedDay + 1;
  els.topWeek.textContent = `WEEK ${pad(state.selectedWeek + 1)}`;
  els.sessionTitle.textContent = `Week ${pad(state.selectedWeek + 1)} / ${week.title}`;
  els.sessionNumber.textContent = `${pad(sequence)} / ${sessionTotal}`;
  els.topic.textContent = session.review ? "WEEKLY REVIEW" : week.category;
  const [priority, priorityReason] = weekPriorities[state.selectedWeek];
  els.sessionPriority.textContent = priority;
  els.sessionPriority.className = `priority-tag ${priority.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  els.sessionPriority.title = priorityReason;
  els.duration.textContent = "120 MIN";
  els.dayTitle.textContent = session.title;
  els.dayGoal.textContent = session.goal;
  els.dayWhy.textContent = session.why;
  const workedExample = simpleExamples[`${state.selectedWeek}-${state.selectedDay}`];
  els.workedExample.hidden = !workedExample;
  if (workedExample) els.workedExampleText.textContent = workedExample;
  els.doneCriteria.textContent = session.done;
  els.coach.textContent = week.coach;
  els.taskSteps.innerHTML = session.actions.map((action) => `<li>${action}</li>`).join("");
  const blocks = session.review
    ? [["00–20", "Recall + checkpoint"], ["20–80", "Redo one priority problem"], ["80–105", "Review misses + notes"], ["105–120", "Set up next week"]]
    : [["00–25", "Concept + pseudocode"], ["25–55", "Trace examples / baseline"], ["55–100", "Code the practice pick"], ["100–120", "Test, explain, log redo"]];
  els.timeBlocks.innerHTML = blocks.map(([time, task]) => `<div class="time-row"><time>${time}</time><span>${task}</span></div>`).join("");
  renderProblems(session.problems);
  els.completeButton.classList.toggle("is-done", done);
  els.completeButton.setAttribute("aria-pressed", String(done));
  els.completeLabel.textContent = done ? "Session completed" : "Mark session done";
  els.completeButton.querySelector(".button-check").textContent = done ? "✓" : "";
}

function renderModuleMap() {
  const total = officialModules.reduce((sum, module) => sum + module.count, 0);
  els.moduleGrid.innerHTML = officialModules.map((module, index) => {
    const relation = index === 6 ? "YOUR CURRENT TOPIC" : index === 7 ? "YOU SAID JUST FINISHED" : index < 6 ? "EARLIER IN SHEET" : "UP NEXT";
    return `<article class="module-item${index === 8 ? " current-module" : ""}"><div class="module-topline"><span>${String(index + 1).padStart(2, "0")}</span><span class="module-relation">${relation}</span></div><h3>${module.name}</h3><p>${module.focus}</p><div class="module-bottom"><strong>${module.count}</strong><span>PROBLEMS</span><span class="module-priority ${module.priority.toLowerCase()}">${module.priority}</span></div></article>`;
  }).join("");
  document.querySelector("#module-total").textContent = total;
}

function renderOverview() {
  const week = weeks[state.selectedWeek];
  const count = weekDone(state.selectedWeek);
  const percent = Math.round((totalDone() / sessionTotal) * 100);
  els.weekCode.textContent = pad(state.selectedWeek + 1);
  els.weekTitle.textContent = week.title;
  els.weekSummary.textContent = week.summary;
  els.weekCount.textContent = `${count} / 6`;
  els.weekMeter.style.width = `${(count / 6) * 100}%`;
  els.weekOutcome.textContent = week.outcome;
  els.checkpoint.textContent = week.checkpoint;
  els.checkpointStatus.classList.toggle("ready", count === 6);
  els.checkpointLabel.textContent = count === 6 ? "All six sessions are complete. Give the checkpoint a try." : `Finish all 6 sessions to unlock your checkpoint. ${6 - count} to go.`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressCount.textContent = `${totalDone()} / ${sessionTotal}`;
  els.progressRing.style.setProperty("--progress", `${percent}%`);
}

function questionForId(id) {
  return questionPool.find((question) => question.id === id)
    || retryQuestions.find((question) => question.id === id);
}

function getVisibleQuestions() {
  const queued = new Set(state.queuedQuestions);
  const solved = new Set(state.solvedQuestions);
  let questions;
  if (state.poolView === "queue") questions = state.queuedQuestions.map(questionForId).filter(Boolean).filter((question) => !solved.has(question.id));
  else if (state.poolView === "done") questions = state.solvedQuestions.map(questionForId).filter(Boolean);
  else if (state.poolView === "retry") questions = retryQuestions.filter((question) => !solved.has(question.id));
  else questions = questionPool.filter((question) => !queued.has(question.id) && !solved.has(question.id));

  const query = els.poolSearch.value.trim().toLowerCase();
  const topic = els.poolTopic.value;
  const difficulty = els.poolDifficulty.value;
  return questions.filter((question) => {
    const matchesQuery = !query || `${question.id} ${question.name} ${question.topic}`.toLowerCase().includes(query);
    const matchesTopic = topic === "all" || question.topic === topic;
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    return matchesQuery && matchesTopic && matchesDifficulty;
  });
}

function renderPool() {
  const freshCount = questionPool.filter((question) => !state.queuedQuestions.includes(question.id) && !state.solvedQuestions.includes(question.id)).length;
  const queueCount = state.queuedQuestions.filter((id) => !state.solvedQuestions.includes(id)).length;
  const solvedCount = state.solvedQuestions.length;
  els.poolTotal.textContent = questionPool.length;
  els.poolQueueCount.textContent = queueCount;
  els.poolDoneCount.textContent = solvedCount;
  els.poolExcludedCount.textContent = reportedSolvedIds.size;
  els.freshTabCount.textContent = freshCount;
  els.queueTabCount.textContent = queueCount;
  els.doneTabCount.textContent = solvedCount;

  const topics = [...new Set([...questionPool, ...retryQuestions].map((question) => question.topic))].sort();
  if (els.poolTopic.options.length === 1) {
    els.poolTopic.innerHTML += topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("");
  }
  els.poolTabs.querySelectorAll("[data-pool-view]").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.poolView === state.poolView));
  });

  const questions = getVisibleQuestions();
  els.poolEmpty.hidden = questions.length > 0;
  els.poolGrid.innerHTML = questions.map((question) => {
    const queued = state.queuedQuestions.includes(question.id);
    const solved = state.solvedQuestions.includes(question.id);
    const retry = Boolean(question.status);
    const picked = state.randomPickId === question.id;
    const link = `https://leetcode.com/problems/${question.slug}/`;
    return `<article class="pool-question${picked ? " is-picked" : ""}" data-question-id="${question.id}">
      <div class="pool-card-meta"><span class="pool-id">#${question.id}</span><span class="pool-topic-tag">${question.topic}</span>${highYieldQuestionIds.has(question.id) ? `<span class="yield-tag">HIGH-YIELD</span>` : ""}<span class="pool-difficulty ${question.difficulty.toLowerCase()}">${question.difficulty}</span>${retry ? `<span class="retry-tag">RETRY · ${question.status}</span>` : ""}</div>
      <h3>${question.name}</h3>
      ${retry ? `<p class="retry-detail">${question.attempts} attempt${question.attempts === 1 ? "" : "s"} logged. Not counted as solved; try again after reviewing the failing case.</p>` : ""}
      <div class="pool-card-actions"><a class="leetcode-open" href="${link}" target="_blank" rel="noreferrer">Open LeetCode <span aria-hidden="true">↗</span></a><button type="button" data-pool-action="queue" data-id="${question.id}" aria-pressed="${queued}">${queued ? "Remove from queue" : "Add to queue"}</button><button type="button" class="mark-solved${solved ? " marked" : ""}" data-pool-action="done" data-id="${question.id}" aria-pressed="${solved}">${solved ? "Accepted here ✓" : "Mark Accepted"}</button></div>
    </article>`;
  }).join("");
}

function render() {
  renderNav();
  renderDays();
  renderSession();
  renderOverview();
  renderModuleMap();
  renderPool();
}

els.completeButton.addEventListener("click", () => {
  const key = keyFor(state.selectedWeek, state.selectedDay);
  if (state.completed[key]) delete state.completed[key];
  else state.completed[key] = true;
  save();
  render();
});
els.poolTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-pool-view]");
  if (!tab) return;
  state.poolView = tab.dataset.poolView;
  state.randomPickId = null;
  save();
  renderPool();
});
els.poolSearch.addEventListener("input", () => renderPool());
els.poolTopic.addEventListener("change", () => renderPool());
els.poolDifficulty.addEventListener("change", () => renderPool());
els.poolGrid.addEventListener("click", (event) => {
  const action = event.target.closest("[data-pool-action]");
  if (!action) return;
  const questionId = Number(action.dataset.id);
  if (action.dataset.poolAction === "queue") {
    state.queuedQuestions = state.queuedQuestions.includes(questionId)
      ? state.queuedQuestions.filter((id) => id !== questionId)
      : [...state.queuedQuestions, questionId];
  } else {
    state.solvedQuestions = state.solvedQuestions.includes(questionId)
      ? state.solvedQuestions.filter((id) => id !== questionId)
      : [...state.solvedQuestions, questionId];
    if (state.solvedQuestions.includes(questionId)) {
      state.queuedQuestions = state.queuedQuestions.filter((id) => id !== questionId);
    }
  }
  save();
  renderPool();
});
els.surprisePick.addEventListener("click", () => {
  if (state.poolView !== "fresh") {
    state.poolView = "fresh";
    els.poolSearch.value = "";
    els.poolTopic.value = "all";
    els.poolDifficulty.value = "all";
  }
  const questions = getVisibleQuestions();
  if (!questions.length) return;
  const question = questions[Math.floor(Math.random() * questions.length)];
  state.randomPickId = question.id;
  save();
  renderPool();
  const pickedCard = els.poolGrid.querySelector(`[data-question-id="${question.id}"]`);
  pickedCard?.scrollIntoView({ behavior: "smooth", block: "center" });
  els.randomAnnouncement.textContent = `Picked LeetCode ${question.id}: ${question.name}`;
});
els.resetButton.addEventListener("click", () => els.resetDialog.showModal());
els.resetDialog.addEventListener("close", () => {
  if (els.resetDialog.returnValue !== "confirm") return;
  state = { ...defaults };
  save();
  render();
});
els.todayDate.textContent = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date()).toUpperCase();
render();