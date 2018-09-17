import os
import csv
import requests
from bs4 import BeautifulSoup

requete = requests.get("http://www.modernisation.gouv.fr/outils-et-methodes-pour-transformer/projets-informatiques-de-letat-avis-conformes-emis-par-la-dinsic")
page = requete.content
soup = BeautifulSoup(page, 'lxml')
avis = soup.select("#node-198118 > div.contenu-node > div.contenu-node-inner.wrapper.clearfix > div > div > div > div > div")

res_ministeres = []

ministeres = avis[1].findChildren("div" , recursive=False)
for ministere in ministeres:

    res_titre = ministere.h4.text
    res_image =  ministere.p.img['src']
    annees = ministere.findChildren("div" , recursive=False)
    res_annees = []

    for annee in annees:
        res_annee = annee.span.text
        avis = annee.findChildren("div" , recursive=False)
        res_avis = []
        for avi in avis:
            res_pdf = avi.a['href']
            res_text = avi.a.text
            res_avi = {
              "pdf":res_pdf,
              "text":res_text
            }
            res_avis.append(res_avi)

        res_avis_annee = {
          "annee" : res_annee,
          "avis" : res_avis
        }
        res_annees.append(res_avis_annee)

    res_ministere = {
      "titre" : res_titre,
      "image" : res_image,
      "annees" : res_annees
    }
    res_ministeres.append(res_ministere)

print(res_ministeres)




