using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MeleeWithoutGun : MonoBehaviour
{
    public Animator anim;
    public GameObject hiddenKnife;
    public GameObject attackKnife;

    private bool isAttacking;

    // Start is called before the first frame update
    void Start()
    {
        attackKnife.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Q) && !isAttacking)
        {
            attackKnife.SetActive(true);
            hiddenKnife.SetActive(false);
            StartCoroutine(ShowKnife());
            anim.Play("Knife Attack 1", 0, 0f);
        }
    }

    IEnumerator ShowKnife()
    {
        isAttacking = true;
        yield return new WaitForSeconds(1.9f);
        isAttacking = false;
        hiddenKnife.SetActive(true);
        attackKnife.SetActive(false);
    }
}
