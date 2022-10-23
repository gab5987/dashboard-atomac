package com.setup.dashboardAutomac;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class RenderGui extends JPanel {
    private JButton jcomp1;
    private JMenuBar jcomp2;
    private JLabel jcomp3;
    private JButton jcomp4;
    private JList jcomp5;
    private JLabel jcomp6;
    private JLabel jcomp7;

    public RenderGui() {
        //construct preComponents
        JMenu arquivoMenu = new JMenu ("Arquivo");
        JMenuItem gerenciar_credenciaisItem = new JMenuItem ("Gerenciar Credenciais");
        arquivoMenu.add (gerenciar_credenciaisItem);
        JMenuItem fazer_backupItem = new JMenuItem ("Fazer Backup");
        arquivoMenu.add (fazer_backupItem);
        JMenuItem exportar_banco_de_dadosItem = new JMenuItem ("Exportar Banco de dados");
        arquivoMenu.add (exportar_banco_de_dadosItem);
        JMenu ajudaMenu = new JMenu ("Ajuda");
        JMenuItem option_1Item = new JMenuItem ("Option 1");
        ajudaMenu.add (option_1Item);
        JMenuItem option_2Item = new JMenuItem ("Option 2");
        ajudaMenu.add (option_2Item);
        String[] jcomp5Items = {"Item 1", "Item 2", "Item 3"};

        //construct components
        jcomp1 = new JButton ("Sair");
        jcomp2 = new JMenuBar();
        jcomp2.add (arquivoMenu);
        jcomp2.add (ajudaMenu);
        jcomp3 = new JLabel ("SISTEMA DA GERENCIAMENTO PREDIAL - JFSC");
        jcomp4 = new JButton ("Documentação da API");
        jcomp5 = new JList (jcomp5Items);
        jcomp6 = new JLabel ("Servidor ativo !");
        jcomp7 = new JLabel ("Para o sistema, utilize o link: ");

        //adjust size and set layout
        setPreferredSize (new Dimension (681, 406));
        setLayout (null);

        //add components
        add (jcomp1);
        add (jcomp2);
        add (jcomp3);
        add (jcomp4);
        add (jcomp5);
        add (jcomp6);
        add (jcomp7);

        //set component bounds (only needed by Absolute Positioning)
        jcomp1.setBounds (15, 360, 100, 25);
        jcomp2.setBounds (0, 0, 680, 30);
        jcomp3.setBounds (185, 30, 290, 80);
        jcomp4.setBounds (480, 360, 180, 25);
        jcomp5.setBounds (100, 135, 485, 135);
        jcomp6.setBounds (100, 90, 100, 25);
        jcomp7.setBounds (100, 105, 205, 25);
    }
    public static void RenderAndShowGui() {
        JFrame frame = new JFrame ("Sistema de Gerenciamento Predial - JFSC");
        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().add (new RenderGui());
        frame.pack();
        frame.setVisible (true);
    }
}
