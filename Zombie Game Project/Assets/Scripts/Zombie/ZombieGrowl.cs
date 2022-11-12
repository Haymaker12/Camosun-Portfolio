using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ZombieGrowl : MonoBehaviour
{
    //This script is responsible for adding the growling behavior.
    //Pass in audio sources and one will be selected and played, then the script waits between a min and max wait time (seconds). 
    //Script ensures looping and playOnWake = false .
    //I also recommend ensuring that all audio sources volume are set as intended on each individual source.

    [Header("Growel wait time")]
    [Tooltip("Minimum time (seconds) between growls. Setting this to low may result in overlaping audio.")]
    public int min = 3;
    [Tooltip("Maximum time (seconds) between growls.")]
    public int max = 15;
    [Tooltip("Enable behavior.")]
    public bool enabled = true;
    
    float wait = 1f;
    int selected = 0;

    //Feed in Audio Sources in inspector
    public AudioSource[] myAudioArray;

    // Start is called before the first frame update
    void Start()
    {
        //to prevent looping, and all zombies growling once at startup 
        foreach (AudioSource myAS in myAudioArray)
        {
            myAS.loop = false;
            myAS.playOnAwake = false;
        }

        //Start Growl 
        StartCoroutine(Growl());
    }

    IEnumerator Growl(){

        //Run until destroyed 
        while (true){

            while (enabled){

                //randomly select one of the growls to play
                selected = Random.Range(0, myAudioArray.Length);

                //calc wait time 
                wait = Random.Range(min, max);

                //wait 
                yield return new WaitForSeconds(wait);

                //play audio from selected audio source 
                myAudioArray[selected].Play();

            }

        }
    }
}
