/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pkg01.aulaoperadoress;


public class AulaOperadoress {
    
    public static void main(String[] args) {
        // Aritméticos
        
        /*int A = 10 + 2;
        int B = A + 2;
        int C = 30;
        int D = 56;
        double E = 4.7;
        
        System.out.println(A);
        System.out.println(B);
        System.out.println(A + B);
        System.out.println(C);
        System.out.println(D);
        System.out.println(D + C - A);
        System.out.println(E + A);
        
        String mostrarResult = "o valor da soma entre A e B é de: ";
        System.out.println(mostrarResult + (A + B));
        */
        
        //---------------------------------//
        
        // Lógicos
        
        int a = 120;
        int b = 20;
        boolean ehMaior = a >= b;
        boolean ehMenor = a <= b;
        boolean ehDiferente = a != b;
        boolean ehIgual = a == b;
        
        
        boolean exemplo = (22 > 500) && (34 < 205);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        
        System.out.println(valor1);
        System.out.println(valor2);
        
        if (ehMaior){
            System.out.println("o valor é maior ou igual");
        } else{
            System.out.println("o valor é menor");
        }  
        
        if (ehIgual){
            System.out.println("o valor é igual");
        } else{
            System.out.println("o valor não é igual");
        }
        
        
        if (ehMenor){
            System.out.println("o valor é menor ou igual");
        } else {
            System.out.println("o valor é maior");
        }
        
        if (ehDiferente){
            System.out.println("o valor é diferente");
        } else {
            System.out.println("o valor não é diferente");
        }
        
    }
    
}
