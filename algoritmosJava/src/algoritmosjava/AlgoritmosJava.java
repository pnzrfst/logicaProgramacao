/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package algoritmosjava;

import java.util.Scanner;
import java.time.LocalDate;

public class AlgoritmosJava {
    
    public static void main(String[] args) {
        /* // ler um número e escrever seu antecessor //
        
        //Scanner leia = new Scanner(System.in);
        
        /*System.out.println("escreva um número: ");
        String numeroCitado = leia.nextLine();
        
        int numero = Integer.parseInt(numeroCitado);
        
        int antecessorCitado = numero - 1;
        
        int sucessorCitado = numero + 1;
        
        System.out.println("o antecessor do seu número é: " + antecessorCitado + " e o sucessor é: " + sucessorCitado);*/
        
        // area total de um retangulo //
        
        /*Scanner leia = new Scanner(System.in);
        
        System.out.println("escreva a altura: ");
        String alturaRetangulo = leia.nextLine();
        
        System.out.println("escreva a largura: ");
        String larguraRetangulo = leia.nextLine();
        
        double alturaConvert = Double.parseDouble(alturaRetangulo);
        double larguraConvert = Double.parseDouble(larguraRetangulo);
        
        double areaTotal = larguraConvert * alturaConvert;
        
        System.out.println("A area total do seu retangulo é de:" + areaTotal);*/
        
        Scanner leia = new Scanner(System.in);
        LocalDate dataAtual = LocalDate.now();
        
        System.out.println("Escreva seu mes de nascimento: ");
        String mesNascimento = leia.nextLine();
        
        System.out.println("Escreva o ano do seu nascimento: ");
        String anoNascimento = leia.nextLine(); 
        
        System.out.println("Escreva o dia do seu nascimento: ");
        String diaNascimento = leia.nextLine();
        
        long dataConvert = dataAtual.toEpochDay(); 
        
        int diaNasc = Integer.parseInt(diaNascimento);
        int mesNasc = Integer.parseInt(mesNascimento);
        int anoNasc = Integer.parseInt(anoNascimento);
        
        
        
        long totalAnos = (((mesNasc * 30) + (anoNasc * 365) + diaNasc));
        long totalDias = 
        System.out.println("a sua idade em dias é de: " + totalAnos);
        
        
    }
    
}
