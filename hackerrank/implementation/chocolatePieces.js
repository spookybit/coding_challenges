// 0:0
// 1:0
// 2:1
// 3:2
// 4:4
// 5:6
// 6:9
// 7:12
// 8:16
// 9:20
//
// Alex is attending a Halloween party with his girlfriend, Silvia. At the party, Silvia spots the corner of an infinite chocolate bar (two dimensional, infinitely long in width and length).
//
// If the chocolate can be served only as 1 x 1 sized pieces and Alex can cut the chocolate bar exactly  times, what is the maximum number of chocolate pieces Alex can cut and give Silvia?
//
// Input Format
// The first line contains an integer , the number of test cases.  lines follow.
// Each line contains an integer .
//
// Output Format
//  lines; each line should contain an integer that denotes the maximum number of pieces that can be obtained for each test case.
//
// Constraints
//
//
//
// Note: Chocolate must be served in 1 x 1 sized pieces. Alex can't relocate any of the pieces, nor can he place any piece on top of another.

function chocolatePieces(k){
  return Math.floor(k/2)**2+Math.floor(k%2);
}
