/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package algoritmosjava;

import java.util.Scanner;
import java.time.LocalDate;

public class AlgoritmosJava {
    
    public static void main(String[] args) {
        // ler um número e escrever seu antecessor //
        
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
        
        
        // total da idade em dias //
        
        /*Scanner leia = new Scanner(System.in);
        LocalDate dataAtual = LocalDate.now();
        
        System.out.println("Escreva sua data de nascimento (no formato anos-meses-dias): ");
        String dataNasc = leia.nextLine();
        
        LocalDate dataNascimento = LocalDate.parse(dataNasc);
        
        long totalIdade = dataAtual.toEpochDay()- dataNascimento.toEpochDay();
     
        System.out.println("A sua idade em dias é de: " + totalIdade + " dias");*/
        
        // total de eleitores de um municipio //
        
        /*Scanner leia = new Scanner(System.in);
        
        System.out.println("Escreva o total de eleitores do seu municipio? ");
        double totalEleitores = leia.nextDouble();
        
        System.out.println("Qual foi o total de votos brancos? ");
        double votosBrancos = leia.nextDouble();
        
        System.out.println("Qual foi o total de votos nulos?");
        double votosNulos = leia.nextDouble(); 
        
        System.out.println("Qual foi o total de votos válidos? ");
        double totalValidos  = leia.nextDouble();
       
        double percentualBrancos = ((votosBrancos/totalEleitores)*100);
        double percentualNulos = ((votosNulos/totalEleitores)*100);
        double percentualValidos = ((totalValidos/totalEleitores)*100);
        
        System.out.println("O total de eleitores foi" + totalEleitores + " sendo: " + percentualBrancos + " brancos" + percentualNulos + " nulos e" + percentualValidos + " validos");*/
        
        
        // conversor de temperatura
        
        /*Scanner leia = new Scanner(System.in);
        
        System.out.println("Qual a temperatura? (em C): ");
        double tempCelsius = leia.nextDouble();
        
        double tempFahrenheit = (tempCelsius * 1.8) + 32;
        double tempKelvin = tempCelsius + 273.15;
        
        System.out.println("A sua temperatura em celsius é de: " + tempCelsius +"C" + ", em Fahrenheit é de: " + tempFahrenheit + "F" + " e em Kelvin é de: " + tempKelvin + "K");*/
      
    }
    
   
    
    
    
}
